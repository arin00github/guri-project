<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ElCard, ElSpace, ElRow, ElCol } from "element-plus";

import { deviceProperty, oprtOptions, windStrOptions } from "../../utils/constant";

import { combineProperties } from "./control";

import StatsUnit from "@/components/common/StatsUnit.vue";
import { KeyProperty } from "@/services/interfaces/common.interface";

type StatsUnitType = { statsLabel: string; statsValue: string };

export default defineComponent({
    name: "ControlBox",
    components: { ElCard, StatsUnit, ElRow, ElCol },
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
        combinePropertiesFC() {
            console.log(" this.$props", this.$props);
        },
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
    <el-card>
        <h4>{{ title }}</h4>

        <el-row class="w-100">
            <el-col v-for="(unit, idx) in statsArray" :key="idx">
                <stats-unit :title="unit.statsLabel" :statsValue="unit.statsValue" />
            </el-col>
        </el-row>
    </el-card>
</template>