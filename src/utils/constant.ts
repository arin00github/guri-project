import { KeyProperty, LabelType } from "../services/interfaces/common.interface";

export const AREA_CODE = "41310";

/**
 * @typedef LabelType[]
 * @name timeOptions
 * @description 운영시간 선택하는 select의 option목록
 */
export const timeOptions: LabelType[] = [
    { label: "06:00", value: "0600" },
    { label: "07:00", value: "0700" },
    { label: "08:00", value: "0800" },
    { label: "09:00", value: "0900" },
    { label: "10:00", value: "1000" },
    { label: "11:00", value: "1100" },
    { label: "12:00", value: "1200" },
    { label: "13:00", value: "1300" },
    { label: "14:00", value: "1400" },
    { label: "15:00", value: "1500" },
    { label: "16:00", value: "1600" },
    { label: "17:00", value: "1700" },
    { label: "18:00", value: "1800" },
    { label: "19:00", value: "1900" },
    { label: "20:00", value: "2000" },
    { label: "21:00", value: "2100" },
    { label: "22:00", value: "2200" },
    { label: "23:00", value: "2300" },
    { label: "24:00", value: "2400" },
];

/**
 * @typedef LabelType[]
 * @name windStrOptions
 * @description 바람세기를 선택하는 select의 option목록
 */
export const windStrOptions: LabelType[] = [
    { label: "약", value: "1" },
    { label: "중", value: "2" },
    { label: "강", value: "3" },
    { label: "자동", value: "4" },
];

/**
 * @typedef LabelType[]
 * @name oprtOptions
 * @description 운영모드를 선택하는 select의 option목록
 */
export const oprtOptions: LabelType[] = [
    { label: "냉방", value: "0" },
    { label: "제습", value: "1" },
    { label: "송풍", value: "2" },
    { label: "자동", value: "3" },
    { label: "난동", value: "4" },
];

/**
 * @typedef KeyProperty[]
 * @name deviceProperty
 * @description 장치의 영문,한문이름, 매칭되는 컴포넌트 정보가 있는 배열
 */
export const deviceProperty: KeyProperty[] = [
    { enName: "pwr", krName: "전원여부", type: "switch" },
    { enName: "oprt", krName: "운전여부", type: "switch" },
    { enName: "oprtHm", krName: "운영시간" },
    { enName: "oprtHm2", krName: "운영시간2" },
    { enName: "oprtMd", krName: "운영기간" },
    { enName: "oprtStHm", krName: "운영시작시간", type: "select" },
    { enName: "oprtEdHm", krName: "운영종료시간", type: "select" },
    { enName: "oprtStHm2", krName: "운영시작시간2", type: "select" },
    { enName: "oprtEdHm2", krName: "운영종료시간2", type: "select" },
    { enName: "oprtStMd", krName: "운영시작기간", type: "calendar" },
    { enName: "oprtEdMd", krName: "운영종료기간", type: "calendar" },
    { enName: "temp", krName: "온도", type: "input", dimension: "℃" },
    { enName: "hmdt", krName: "습도", dimension: "%" },
    { enName: "fineDust", krName: "미세먼지", dimension: "㎍/㎥" },
    { enName: "ufineDust", krName: "초미세먼지", dimension: "㎍/㎥" },
    { enName: "co2", krName: "이산화탄소", dimension: "ppm" },
    { enName: "vocs", krName: "휘발성화합", dimension: "ppm" },
    { enName: "open", krName: "개폐", type: "switch" },
    { enName: "in", krName: "들어옴" },
    { enName: "out", krName: "나감" },
    { enName: "inErr", krName: "in에러" },
    { enName: "outErr", krName: "out에러" },
    { enName: "inTdy", krName: "하루들어옴" },
    { enName: "outTdy", krName: "하루나감" },
    { enName: "watt", krName: "전력량", dimension: "W" },
    { enName: "amp", krName: "전류", dimension: "A" },
    { enName: "volt", krName: "전압", dimension: "V" },
    { enName: "err", krName: "에러" },
    { enName: "wattTdy", krName: "당일전력량", dimension: "W" },
    { enName: "autoTemp", krName: "설정온도", type: "input", dimension: "℃" },
    { enName: "coolTemp", krName: "냉방온도", type: "input", dimension: "℃" },
    { enName: "heatTemp", krName: "난방온도", type: "input", dimension: "℃" },
    { enName: "coolStMd", krName: "하절기(시작일)", type: "calendar" },
    { enName: "coolEdMd", krName: "하절기(종료일)", type: "calendar" },
    { enName: "indrTemp", krName: "실내온도", type: "input", dimension: "℃" },
    { enName: "errCd", krName: "에러코드" },
    { enName: "windSts", krName: "바람세기", type: "select" },
    { enName: "oprtMode", krName: "운전모드", type: "select" },
    { enName: "alrm", krName: "알람여부", type: "switch" },
    { enName: "coolMd", krName: "냉방기간" },
    { enName: "colr", krName: "신호등상태" },
];
