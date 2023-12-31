import { rest } from "msw";

import assetListSF from "../data/assetListSF.json";
import assetListSG from "../data/assetListSG.json";
import { editData } from "../data/dataTransfer";
import securityZoneData from "../data/securityZoneDevice.json";
import safeTreeData from "../data/sefetyTreeDevice.json";

import { ASSET_GIS_INFO, SAFE_TREE_API_URL, SECURITY_GUARD_API_URL } from "@/services/api/apiConstant";
import { makeTestUrl } from "@/utils/utils";

// 공통으로 사용하는 api
export const commonHandlers = [
    rest.post(makeTestUrl(ASSET_GIS_INFO.postFeatureUrl), async (req, res, ctx) => {
        const reqObject = await req.json();
        const typeName = reqObject.typenames[0];
        if (typeName === "layer_ansim_tree") {
            return res(ctx.status(200), ctx.json([{ features: assetListSF }]));
        } else {
            return res(ctx.status(200), ctx.json([{ features: assetListSG }]));
        }
    }),
];

// 방법초소 API
export const securityHandler = [
    // getSecurityZoneDetail
    rest.post(SECURITY_GUARD_API_URL.DetailInfo_Test, async (req, res, ctx) => {
        const reqObject = await req.json();
        const editedData = editData(`방범초소${reqObject.uid.slice(0, 3)}`, reqObject.uid, "auto", securityZoneData);
        return res(ctx.status(200), ctx.json(editedData));
    }),
    // postSecurityZoneControl
    rest.post(SECURITY_GUARD_API_URL.ControlChange_Test, async (req, res, ctx) => {
        const reqObject = await req.json();
        if (!reqObject) {
            return res(ctx.status(400));
        } else {
            const { device_id, ...rest } = reqObject;
            if (device_id) {
                return res(
                    ctx.status(200),
                    ctx.json({
                        response: rest,
                        code: 200,
                        message: "OK",
                        responseTime: "2023-07-20T15:00:24+09:00",
                    }),
                );
            }
        }
    }),
];

// 안심트리 API
export const safeTreeHandler = [
    rest.post(SAFE_TREE_API_URL.DetailInfo_Test, async (req, res, ctx) => {
        const reqObject = await req.json();
        const editedData = editData(`스마트트리${reqObject.uid.slice(0, 3)}`, reqObject.uid, "auto", safeTreeData);
        return res(ctx.status(200), ctx.json(editedData));
    }),

    rest.post(SAFE_TREE_API_URL.ControlChange_Test, async (req, res, ctx) => {
        const reqObject = await req.json();
        if (!reqObject) {
            return res(ctx.status(400));
        } else {
            const { device_id, ...rest } = reqObject;
            if (device_id) {
                return res(
                    ctx.status(200),
                    ctx.json({
                        response: rest,
                        code: 200,
                        message: "OK",
                        responseTime: "2023-07-20T15:00:24+09:00",
                    }),
                );
            }
        }
    }),
];
