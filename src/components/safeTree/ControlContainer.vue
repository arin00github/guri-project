<script lang="ts">
import { defineComponent } from "vue";

import { ElContainer, ElRow, ElCol } from "element-plus";

import { combineProperties } from "../common/control";

import ControlBox from "@/components/common/ControlBox.vue";
import { getSafeTreeDetail } from "@/services/api/apiCollection";
import { SafeTreeDetail } from "@/services/interfaces/control.interface";

export default defineComponent({
    name: "ControlContainer",
    components: { ElContainer, ElRow, ElCol, ControlBox },
    props: {
        selectedId: String,
    },
    updated() {
        // console.log("ControlContainer update", this.$props.selectedId);
        if (this.$props.selectedId) {
            this.getSafeTreeDetailAPI(this.$props.selectedId);
        }
    },
    created() {
        // console.log("ControlContainer create", this.$props.selectedId);
        if (this.$props.selectedId) {
            this.getSafeTreeDetailAPI(this.$props.selectedId);
        }
    },
    computed: {
        editedDevices() {
            if (this.rawDetailData) {
                return [
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
                    {
                        dvcName: "미세먼지신호등",
                        dvcData: this.rawDetailData?.dvcFDLD ? this.rawDetailData.dvcFDLD[0] : {},
                        dvcType: "dvcFDLD",
                    },
                    {
                        dvcName: "충전기",
                        dvcData: this.rawDetailData?.dvcCHGR ? this.rawDetailData.dvcCHGR[0] : {},
                        dvcType: "dvcCHGR",
                    },
                ];
            } else {
                return [];
            }
        },
    },
    data() {
        return {
            mode: "auto",
            rawDetailData: undefined as SafeTreeDetail | undefined,
        };
    },
    methods: {
        getSafeTreeDetailAPI(paramsId: string) {
            getSafeTreeDetail(paramsId).then(res => {
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
    margin-top: 20px;
    margin-bottom: 40px;
}
.el-col.card {
    margin-bottom: 20px;
}
</style>
