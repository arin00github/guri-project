import securityZonedata from "./securityZoneDevice.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function changeMode(mode: string, data: any) {
    return { ...data, response: { ...data.response, auto_ctrl_yn: mode === "auto" } };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function editData(assetName: string, uid: string, mode: string, data: any) {
    return { ...data, response: { ...data.response, name: assetName, uid: uid, auto_ctrl_yn: mode === "auto" } };
}

export const securityZoneDataWithAutoMode = changeMode("auto", securityZonedata);
