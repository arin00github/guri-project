import { makeTestUrl } from "@/utils/utils";

/** @constant gis 관련 api fetch url */
export const ASSET_GIS_INFO = {
    postFeatureUrl: "/dms-gis/api/geo/giswfs/postFeature",
    postLayerStyleUrl: "/dms-gis/api/v1/layer/postLayerStyle",
};

/** @constant 공통 url 부분 */
const commonPath = "/tms-secure-zone/api/v1";

/** @constant 안심트리 관련 API의 url주소  */
export const SAFE_TREE_API_URL = {
    DetailInfo: `${commonPath}/ansim-tree/get/byid`,
    ControlChange: `${commonPath}/ansim-tree/post/control`,
    DetailInfo_Test: makeTestUrl(`${commonPath}/ansim-tree/get/byid`),
    ControlChange_Test: makeTestUrl(`${commonPath}/ansim-tree/post/control`),
};

/** @constant 방범초소 관련 API의 url주소  */
export const SECURITY_GUARD_API_URL = {
    DetailInfo: `${commonPath}/secure-zone/get/byid`,
    ControlChange: `${commonPath}/secure-zone/post/control`,
    DetailInfo_Test: makeTestUrl(`${commonPath}/secure-zone/get/byid`),
    ControlChange_Test: makeTestUrl(`${commonPath}/secure-zone/post/control`),
};

/** @constant 안심트리, 방범초소 모두 사용하는 API의 url주소  */
export const COMMOM_API_URL = {
    ModeChange: `${commonPath}/common/post/auto-yn`,
    ModeChange_Test: makeTestUrl(`${commonPath}/common/post/auto-yn`),
};
