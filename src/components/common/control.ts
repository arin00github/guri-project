import { makeDayString, makeTimeString } from "@/utils/utils";

export const combineProperties = (deviceInfo: Record<string, string | number>) => {
    const {
        dvcId,
        dvcTypeNm,
        oprtStHm,
        oprtEdHm,
        oprtStHm2,
        oprtEdHm2,
        coolStMd,
        coolEdMd,
        oprtStMd,
        oprtEdMd,
        ...rest
    } = deviceInfo;
    // TODO: 안쓰는 변수는 삭제해야함
    // dvcId;
    // dvcTypeNm;

    let oprtHm;
    let oprtHm2;
    let coolMd;
    let oprtMd;

    if (oprtStHm && oprtEdHm) {
        oprtHm = `${makeTimeString(oprtStHm as string)} ~ ${makeTimeString(oprtEdHm as string)}`;
    }
    if (oprtStHm2 && oprtEdHm2) {
        oprtHm2 = `${makeTimeString(oprtStHm2 as string)} ~ ${makeTimeString(oprtEdHm2 as string)}`;
    }
    if (coolStMd && coolEdMd) {
        coolMd = `${makeDayString(coolStMd as string)} ~ ${makeDayString(coolEdMd as string)}`;
    }
    if (oprtEdMd && oprtStMd) {
        oprtMd = `${makeDayString(oprtStMd as string)} ~ ${makeDayString(oprtEdMd as string)}`;
    }

    if (oprtHm && coolMd) {
        return { ...rest, oprtHm, coolMd };
    }
    if (oprtHm && oprtMd) {
        return { ...rest, oprtHm, oprtMd };
    }

    if (oprtHm && oprtHm2) {
        return { ...rest, oprtHm, oprtHm2 };
    }
    if (oprtHm && !oprtHm2) {
        return { ...rest, oprtHm };
    }

    if (!oprtHm && oprtHm2) {
        return { ...rest, oprtHm2 };
    }
    return { ...rest };
};
