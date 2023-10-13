<script lang="ts">
import { defineComponent } from "vue";

import { ElContainer, ElText, ElRow, ElCol } from "element-plus";

import ControlBox from "@/components/common/ControlBox.vue";
import { getSafeTreeDetail } from "@/services/api/apiCollection";
import { SafeTreeDetail } from "@/services/interfaces/control.interface";

export default defineComponent({
    name: "ControlContainer",
    components: { ElContainer, ElText, ElRow, ElCol, ControlBox },
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
    },
});
</script>
<template>
    <el-container class="container">
        <el-text>장치제어 상세정보</el-text>
        <p>{{ selectedId }}</p>
        <el-container class="w-100">
            <el-row class="w-100" :gutter="20">
                <el-col :span="8" v-for="device in editedDevices" :key="device.dvcType">
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
</style>
