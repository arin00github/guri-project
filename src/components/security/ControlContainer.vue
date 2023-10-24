<script lang="ts">
import { defineComponent } from "vue";

import { ElContainer, ElRow, ElCol } from "element-plus";

import { getSecurityZoneDetail } from "../../services/api/apiCollection";
import { SecurityZoneDetail } from "../../services/interfaces/control.interface";
import { combineProperties } from "../common/control";
import ControlBox from "../common/ControlBox.vue";
import ControlModal from "../common/ControlModal.vue";

const deviceList = [
    { labelName: "냉난방기", keyName: "dvcARCO" },
    { labelName: "자동문", keyName: "dvcATDR" },
    { labelName: "충전기", keyName: "dvcCHGR" },
    { labelName: "온열벤치", keyName: "dvcHTBC" },
    { labelName: "LED", keyName: "dvcLDLT" },
    { labelName: "태양광패널", keyName: "dvcSPGN" },
];

export default defineComponent({
    name: "ControlContainer",
    components: { ElContainer, ElRow, ElCol, ControlBox, ControlModal },
    props: {
        selectedId: String,
    },
    updated() {
        // console.log("ControlContainer update", this.$props.selectedId);
        if (this.$props.selectedId) {
            this.getSecurityDetailAPI(this.$props.selectedId);
        }
    },
    created() {
        // console.log("ControlContainer create", this.$props.selectedId);
        if (this.$props.selectedId) {
            this.getSecurityDetailAPI(this.$props.selectedId);
        }
    },
    computed: {
        editedDevices() {
            if (this.rawDetailData) {
                const result = [
                    {
                        dvcName: "냉난방기",
                        dvcData: this.rawDetailData?.dvcARCO ? this.rawDetailData.dvcARCO[0] : {},
                        dvcType: "dvcARCO",
                    },
                    {
                        dvcName: "자동문",
                        dvcData: this.rawDetailData?.dvcATDR ? this.rawDetailData.dvcATDR[0] : {},
                        dvcType: "dvcATDR",
                    },
                    {
                        dvcName: "충전기",
                        dvcData: this.rawDetailData?.dvcCHGR ? this.rawDetailData.dvcCHGR[0] : {},
                        dvcType: "dvcCHGR",
                    },
                    {
                        dvcName: "온열벤치",
                        dvcData: this.rawDetailData?.dvcHTBC ? this.rawDetailData.dvcHTBC[0] : {},
                        dvcType: "dvcHTBC",
                    },
                    {
                        dvcName: "LED조명 정보",
                        dvcData: this.rawDetailData?.dvcLDLT ? this.rawDetailData.dvcLDLT[0] : {},
                        dvcType: "dvcLDLT",
                    },
                    {
                        dvcName: "태양광패널",
                        dvcData: this.rawDetailData?.dvcSPGN ? this.rawDetailData.dvcSPGN[0] : {},
                        dvcType: "dvcSPGN",
                    },
                ];
                return result;
            } else {
                return [];
            }
        },
    },
    data() {
        return {
            mode: "auto",
            rawDetailData: undefined as SecurityZoneDetail | undefined,
            selectedDevice: undefined as string | undefined,
        };
    },
    methods: {
        getSecurityDetailAPI(paramsId: string) {
            getSecurityZoneDetail(paramsId).then(res => {
                this.rawDetailData = res?.response;
            });
        },
        calculateColSpan(valueData: Record<string, string | number>) {
            const valueLength = Object.entries(combineProperties(valueData)).length;
            if (valueLength > 6) {
                return 18;
            } else if (valueLength <= 6 && valueLength > 2) {
                return 12;
            } else {
                return 6;
            }
        },
        handleSelectDevice(deviceType: string) {
            this.selectedDevice = deviceType;
        },
    },
});
</script>
<template>
    <el-container class="container">
        <div class="page-title">장치제어 상세정보</div>
        <el-container class="w-100">
            <el-row class="w-100" :gutter="20">
                <el-col
                    class="card"
                    v-for="device in editedDevices"
                    :key="device.dvcType"
                    :span="calculateColSpan(device.dvcData)"
                >
                    <control-box :control-data="device.dvcData" :title="device.dvcName" :device-type="device.dvcType" />
                </el-col>
            </el-row>
        </el-container>
    </el-container>
    <control-modal
        :is-open="true"
        :control-data="editedDevices.find(dev => dev.dvcType === selectedDevice)?.dvcData"
    ></control-modal>
</template>

<style>
.w-100 {
    width: 100%;
}
.container {
    flex-direction: column;
    width: 100%;
}
.page-title {
    color: white;
    margin-top: 26px;
    margin-bottom: 16px;
    text-align: left;
    font-size: 18px;
}
.el-col.card {
    margin-bottom: 20px;
}
</style>
