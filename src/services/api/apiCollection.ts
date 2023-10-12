import { ErrorResponse, FeatureAsset, ResultForm } from "../interfaces/common.interface";
import { SafeTreeDetailResponse, SecurityZoneDetailResponse } from "../interfaces/control.interface";

import {
    AREA_CODE,
    ASSET_GIS_INFO,
    REQUEST_OPTIONS,
    SAFE_TREE_API_URL,
    SAFE_TREE_ASSET_CONFIG,
    SECURITY_GUARD_API_URL,
    SECURITY_GUARD_ASSET_CONFIG,
} from "./apiConstant";
import { executeRequest } from "./httpService";

import { makeTestUrl, settingUrl } from "@/utils/utils";

/*********************************************************************
 * @name getSecurityZoneAssets
 * @returns 방범초소의 자산목록 배열
 * @description 방범초소의 자산목록을 불러오는 API
 *********************************************************************/
export const getSecurityZoneAssets = async (token: string): Promise<FeatureAsset[] | undefined> => {
    const currentUrl = settingUrl({
        testUrl: makeTestUrl(ASSET_GIS_INFO.postFeatureUrl),
        url: makeTestUrl(ASSET_GIS_INFO.postFeatureUrl),
    });

    const results = await executeRequest(currentUrl, {
        ...REQUEST_OPTIONS,
        data: { typenames: [SECURITY_GUARD_ASSET_CONFIG.layerId], area: AREA_CODE },
        headers: { Authorization: `Bearer ${token}` },
    });

    if (results && results.status === 200) {
        return results.data[0].features as FeatureAsset[];
    }
    if (results && results.status === 401) {
        window.location.reload();
    }
    if (results && typeof results.data === "object") {
        return results.data;
    }
    return undefined;
};

/*********************************************************************
 * @name getSecurityZoneDetail
 * @description 방범조초 상세 정보 조회
 * @param byId : string | undefined
 * @returns {SecurityZoneDetailResponse | undefined}
 *********************************************************************/
export const getSecurityZoneDetail = async (
    byId: string | undefined,
): Promise<SecurityZoneDetailResponse | ErrorResponse | undefined | Record<string, never>> => {
    if (!byId) {
        return {};
    }

    const currentUrl = settingUrl({
        testUrl: SECURITY_GUARD_API_URL.DetailInfo_Test,
        url: SECURITY_GUARD_API_URL.DetailInfo,
    });

    const results = await executeRequest(currentUrl, {
        method: "POST",
        data: JSON.stringify({ uid: byId }),
    });

    if (results && results.status === 200) {
        return results.data as SafeTreeDetailResponse;
    }
    if (results && results.status === 401) {
        window.location.reload();
    }
    if (results && typeof results.data === "object") {
        return results.data as ErrorResponse;
    }

    return undefined;
};

/*********************************************************************
 * @name postSecurityZoneControl
 * @param {Record<string, string | number>} newControl 변경한 장치설정 정보
 * @returns 변경된 장치설정 정보
 * @description 방범초소의 장치설정을 변경하는 API
 *********************************************************************/
export const postSecurityZoneControl = async (
    newControl: Record<string, string | number>,
): Promise<ResultForm<Record<string, string | number>> | undefined | ErrorResponse> => {
    const currentUrl = settingUrl({
        testUrl: SECURITY_GUARD_API_URL.ControlChange_Test,
        url: SECURITY_GUARD_API_URL.ControlChange,
    });

    const results = await executeRequest(currentUrl, {
        method: "POST",
        data: JSON.stringify(newControl),
    });

    if (results && results.status === 200) {
        return results.data as ResultForm<Record<string, string | number>>;
    }
    if (results && results.status === 401) {
        window.location.reload();
    }
    if (results && typeof results.data === "object") {
        // console.log("postSecurityZoneControl", results);
        throw new Error("Error");
        // return results.data as ErrorResponse;
    }
    return undefined;
};

/*********************************************************************
 * @name getSafeTreeAssets
 * @returns 안심트리의 자산목록 배열
 * @description 안심트리의 자산목록을 불러오는 API
 *********************************************************************/
export const getSafeTreeAssets = async (token: string): Promise<FeatureAsset[] | undefined> => {
    const currentUrl = settingUrl({
        testUrl: makeTestUrl(ASSET_GIS_INFO.postFeatureUrl),
        url: ASSET_GIS_INFO.postFeatureUrl,
    });

    const response = await executeRequest(currentUrl, {
        ...REQUEST_OPTIONS,
        data: { typenames: [SAFE_TREE_ASSET_CONFIG.layerId], area: AREA_CODE },
        headers: { Authorization: `Bearer ${token}` },
    });

    if (response && response.status === 200) {
        return response.data[0].features as FeatureAsset[];
    }
    if (response && response.status === 401) {
        window.location.reload();
    }
    if (response && typeof response.data === "object") {
        return response.data;
    }

    return undefined;
};

/*********************************************************************
 * @name getSafeTreeDetail
 * @description 안심트리 상세 정보 조회
 * @param byId : string | undefined
 * @returns {SafeTreeDetailResponse | ErrorResponse | undefined}
 *********************************************************************/
export const getSafeTreeDetail = async (
    byId: string | undefined,
): Promise<SafeTreeDetailResponse | ErrorResponse | undefined | Record<string, never>> => {
    if (!byId) {
        return {};
    }

    const currentUrl = settingUrl({
        testUrl: SAFE_TREE_API_URL.DetailInfo_Test,
        url: SAFE_TREE_API_URL.DetailInfo,
    });

    const response = await executeRequest(currentUrl, {
        method: "POST",
        data: JSON.stringify({ uid: byId }),
    });

    if (response && response.status === 200) {
        return response.data as SafeTreeDetailResponse;
    }
    if (response && response.status === 401) {
        window.location.reload();
    }
    if (response && typeof response.data === "object") {
        return response.data as ErrorResponse;
    }

    return undefined;
};

/*********************************************************************
 * @name postSafeTreeControl
 * @param {Record<string, string | number>} newControl 변경한 장치설정 정보
 * @returns 변경된 장치설정 정보
 * @description 장치설정을 변경하는 API
 *********************************************************************/
export const postSafeTreeControl = async (
    newControl: Record<string, string | number>,
): Promise<ResultForm<Record<string, string | number>> | undefined | ErrorResponse> => {
    const currentUrl = settingUrl({
        testUrl: SAFE_TREE_API_URL.ControlChange_Test,
        url: SAFE_TREE_API_URL.ControlChange,
    });

    const response = await executeRequest(currentUrl, {
        method: "POST",
        data: JSON.stringify(newControl),
    });

    if (response && response.status === 200) {
        return response.data as ResultForm<Record<string, string | number>>;
    }
    if (response && response.status === 401) {
        window.location.reload();
    }
    if (response && typeof response.data === "object") {
        throw new Error("Error");
        // return response.data as ErrorResponse;
    }

    return undefined;
};
