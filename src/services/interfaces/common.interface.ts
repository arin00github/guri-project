/* eslint-disable camelcase */
export type modeParams = {
    node_id: string;
    auto_ctrl_yn: boolean;
};

export type OptionRow = {
    label: string;
    value: string | number;
};

export interface ResultForm<T extends object> {
    code: number;
    message: string;
    responseTime: string;
    response: T;
}

export type processStateType = {
    message: string;
    action: string;
};

export interface FeatureAsset {
    geometry: {
        type: string;
        center: number[];
        coordinates: number[];
    };
    properties: Record<string, string | number | object>;
    // type: "Feature";
}

/**
 * @typedef LabelType
 * @description select의 options 값을 정의할 때 사용
 */
export type LabelType = { label: string; value: string | number };

export type KeyProperty = {
    enName: string;
    krName: string;
    type?: "select" | "switch" | "input" | "calendar";
    dimension?: string;
};

/**
 * @typedef EditedDeviceType
 * @property {string} dvcName 장치한글이름
 * @property {Record<string, string | number>} dvcData 장치상세정보
 * @property {string} dvcType 장치종류
 */
export interface EditedDeviceType {
    dvcName: string;
    dvcData: Record<string, string | number>;
    dvcType: string;
}

export type SuccessCallback<T, V> = (data: T, variables: V, context: unknown) => void;
export type ErrorCallback<V> = (error: unknown, variables: V, context: unknown) => void;

/**
 * @typedef {Object} UseAssetListParam<T>
 * @property {SuccessCallback<T>} onSuccess API 성공 시 실행되는 함수
 */
export interface UseAssetListParam<T> {
    token: string;
    onSuccess?: (data: T) => void;
}

/**
 * @typedef {Object} UseDetailParam<T>
 * @property {string | undefined} selectedId 선택한 자산의 고유 아이디
 * @property {SuccessCallback<T, Record<string, string | number>>} onSuccess API 성공 시 실행되는 함수
 */
export interface UseDetailParam<T> {
    selectedId?: string;
    onSuccess?: SuccessCallback<T, Record<string, string | number>>;
}

/**
 * @typedef {Object} UseControlParam<T>
 * @property {SuccessCallback<T, Record<string, string | number>>} onSuccess API 성공 시 실행되는 함수
 * @property {ErrorCallback<Record<string, string | number>>} onError API 실패 시 실행되는 함수
 */
export interface UseControlParam<T> {
    onSuccess?: SuccessCallback<T, Record<string, string | number>>;
    onError?: ErrorCallback<Record<string, string | number>>;
}

/**
 * @typedef {Object} UseModeChangeParam<T>
 * @property {SuccessCallback<T, modeParams>} onSuccess API 성공 시 실행되는 함수
 * @property {ErrorCallback<modeParams>} onError API 실패 시 실행되는 함수
 */
export interface UseModeChangeParam<T> {
    onSuccess?: SuccessCallback<T, modeParams>;
    onError?: ErrorCallback<modeParams>;
}

export interface TmsSecureZoneResponse {
    code: number;
    message: string;
    responseTime: string;
}

export interface ErrorResponse {
    code: number;
    message: string;
    responseTime: string;
    response: undefined;
}
