/* eslint-disable camelcase */
import { TmsSecureZoneResponse } from "./common.interface";

export interface ModeState {
    // eslint-disable-next-line camelcase
    auto_ctrl_yn: boolean;
}

export type controlType = {
    label: string;
    key: string;
    type: "switch" | "input" | "select" | "calendar" | "";
    value: unknown;
    errorMsg?: string;
};

export interface BasicDeviceType {
    dvcId: string;
    dvcTypeNm?: string;
    pwr: number;
    oprtStHm: string;
    oprtEdHm: string;
}

export interface BasicDeviceType2 extends BasicDeviceType {
    oprtStMd: string;
    oprtEdMd: string;
}

export interface AirconDeviceType {
    dvcId: string;
    oprt: number;
    oprtMode: string;
    coolTemp: number;
    heatTemp: number;
    autoTemp: number;
    windSts: string;
    indrTemp: number;
    coolStMd: string;
    coolEdMd: string;
    oprtStHm: string;
    oprtEdHm: string;
}

export interface AirssDeviceType {
    dvcId: string;
    temp: number;
    hmdt: number;
    fineDust: number;
    ufineDust: number;
    co2: number;
    vocs: number;
}
export interface PanelDeviceType {
    dvcId: string;
    dvcTypeNm: string;
    watt: number;
    amp: number;
    volt: number;
    wattTdy: number;
}

export interface CctvInfoType {
    name: string;
    cctv_id: string;
}

/**
 * @typedef SecurityZoneDetail
 * @property {string} uid 고유아이디
 * @property {string} area 지역
 * @property {string} name 자산이름
 * @property {string} asset_type 자산타입
 * @property {string} node_id 노드 아이디
 * @property {string} auto_ctrl_yn 자동모드 여부
 * @property {CctvInfoType} cctv_info cctv 정보를 담은 배열
 * @property {Record<string, string | number>[] | undefined} dvcARCO 냉난방기 상세정보 배열
 * @property {Record<string, string | number>[] | undefined} dvcARSS 환경센서 상세정보 배열
 * @property {Record<string, string | number>[] | undefined} dvcCHGR 충전기 상세정보 배열
 * @property {Record<string, string | number>[] | undefined} dvcLDLT LED조명 상세정보 배열
 * @property {Record<string, string | number>[] | undefined} dvcATDR 자동문 상세정보 배열
 * @property {Record<string, string | number>[] | undefined} dvcSPGN 태양광패널 상세정보 배열
 * @property {Record<string, string | number>[] | undefined} dvcHTBC 온열밴치 상세정보 배열
 */
export interface SecurityZoneDetail {
    uid: string;
    area: string;
    name: string;
    asset_type: string;
    node_id: string;
    auto_ctrl_yn: boolean;
    cctv_info: CctvInfoType[];
    dvcARCO?: Record<string, string | number>[];
    dvcARSS?: Record<string, string | number>[];
    dvcCHGR?: Record<string, string | number>[];
    dvcLDLT?: Record<string, string | number>[];
    dvcATDR?: Record<string, string | number>[];
    dvcSPGN?: Record<string, string | number>[];
    dvcHTBC?: Record<string, string | number>[];
}

/**
 * @typedef SafeTreeDetail
 * @property {string} uid 고유아이디
 * @property {string} area 지역
 * @property {string} name 자산이름
 * @property {string} asset_type 자산타입
 * @property {string} node_id 노드 아이디
 * @property {string} auto_ctrl_yn 자동모드 여부
 * @property {CctvInfoType} cctv_info cctv 정보를 담은 배열
 * @property {Record<string, string | number>[] | undefined} dvcARCO 냉난방기 상세정보 배열
 * @property {Record<string, string | number>[] | undefined} dvcARSS 환경센서 상세정보 배열
 * @property {Record<string, string | number>[] | undefined} dvcCHGR 충전기 상세정보 배열
 * @property {Record<string, string | number>[] | undefined} dvcLDLT LED조명 상세정보 배열
 * @property {Record<string, string | number>[] | undefined} dvcATDR 자동문 상세정보 배열
 * @property {Record<string, string | number>[] | undefined} dvcSPGN 태양광패널 상세정보 배열
 * @property {Record<string, string | number>[] | undefined} dvcHTBC 온열밴치 상세정보 배열
 */
export interface SafeTreeDetail {
    uid: string;
    area: string;
    name: string;
    asset_type: string;
    node_id: string;
    auto_ctrl_yn: boolean;
    cctv_info: CctvInfoType[];
    dvcFDLD?: Record<string, string | number>[];
    dvcARCO?: Record<string, string | number>[];
    dvcARSS?: Record<string, string | number>[];
    dvcCHGR?: Record<string, string | number>[];
    dvcLDLT?: Record<string, string | number>[];
    dvcATDR?: Record<string, string | number>[];
    dvcSPGN?: Record<string, string | number>[];
    dvcHTBC?: Record<string, string | number>[];
}

export interface SecurityZoneDetailResponse extends TmsSecureZoneResponse {
    response: SecurityZoneDetail;
}

export interface SafeTreeDetailResponse extends TmsSecureZoneResponse {
    response: SafeTreeDetail;
}
