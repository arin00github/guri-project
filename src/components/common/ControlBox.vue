<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ElCard, ElRow, ElButton } from "element-plus";

import { deviceProperty, oprtOptions, windStrOptions } from "../../utils/constant";

import { combineProperties } from "./control";

import StatsUnit from "@/components/common/StatsUnit.vue";
import { KeyProperty } from "@/services/interfaces/common.interface";

type StatsUnitType = { statsLabel: string; statsValue: string };

export default defineComponent({
    name: "ControlBox",
    components: { ElCard, StatsUnit, ElRow, ElButton },
    props: {
        title: String,
        deviceType: String,
        controlData: Object as PropType<Record<string, string | number>>,
    },
    data() {
        return {
            statsArray: [] as StatsUnitType[],
        };
    },
    created() {
        console.log("this.$props", this.$props);
        if (this.$props.controlData) {
            this.statsArray = this.makeStatsArray(this.$props.controlData);
        }
    },
    updated() {
        if (this.$props.controlData) {
            this.statsArray = this.makeStatsArray(this.$props.controlData);
        }
    },
    methods: {
        searchDataByProperty(deviceEnName: string, keyString: keyof KeyProperty) {
            const findObject = deviceProperty.find(property => property.enName === deviceEnName);
            return findObject ? findObject[keyString] : "";
        },
        makeStatsArray(controlData: Record<string, string | number>): StatsUnitType[] {
            const properties = combineProperties(controlData);
            return Object.entries(properties).map(([key, value]) => ({
                statsLabel: this.searchDataByProperty(key, "krName") || "",
                statsValue: String(this.printStatsLabel(key, value)),
            }));
        },
        printStatsLabel(key: string, value: string | number) {
            const dimension = this.searchDataByProperty(key, "dimension");

            if (!["pwr", "oprt", "oprtMode", "windSts"].includes(key)) {
                return `${value}${dimension || ""}`;
            } else {
                let label = "";
                if (key === "pwr") {
                    label = value === 1 ? "ON" : "OFF";
                } else if (key === "oprt") {
                    label = value === 1 ? "ON" : "OFF";
                } else if (key === "oprtMode") {
                    label = oprtOptions[Number(value)]?.label;
                } else if (key === "windSts") {
                    label = windStrOptions[Number(value) - 1]?.label;
                }
                return value ? `${label}${dimension || ""}` : "";
            }
        },
    },
});
</script>

<template>
    <el-card bodyClass="card-body">
        <div class="card-title">
            <div class="title-name">{{ title }}</div>
            <el-button>설정</el-button>
        </div>

        <el-row class="w-100 stats-wrap">
            <stats-unit
                v-for="(unit, idx) in statsArray"
                :key="idx"
                :title="unit.statsLabel"
                :statsValue="unit.statsValue"
            />
        </el-row>
    </el-card>
</template>

<style lang="scss">
.card-body {
    padding: 0;
}
.card-title {
    background-color: rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 40px;
    height: 40px;
}
.title-name {
    margin-left: 30px;
    font-weight: 700;
    font-size: 18px;
}
.stats-wrap {
    justify-content: space-between;
    padding: 32px 24px;
}
</style>
