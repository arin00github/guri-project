<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { ElContainer, ElSelect, ElOption, ElText } from "element-plus";

import { FeatureAsset } from "@/services/interfaces/common.interface";

export default defineComponent({
    name: "ControlHeader",
    components: { ElContainer, ElSelect, ElOption, ElText },
    props: {
        selectedId: String,
        assetData: Object as PropType<FeatureAsset[] | undefined>,
    },
    computed: {
        optionList() {
            // console.log("Control computed optionList", this.$props);
            return this.$props.assetData?.map(dt => {
                const assetId = dt.properties.id as string;
                return { label: dt.properties.show_label as string, value: assetId.split(".")[1] };
            });
        },
        getSelectedId(): string {
            // console.log("Control computed getSelectedId", this.$props);
            if (!this.$props.assetData || this.$props.assetData.length === 0) return "";
            const newArray = this.$props.assetData?.map(dt => {
                const assetId = dt.properties.id as string;
                return { label: dt.properties.show_label as string, value: assetId.split(".")[1] };
            });
            const initialValue = newArray ? newArray[0].value : "";
            if (this.$props.selectedId) {
                return this.$props.selectedId;
            } else {
                this.handleSelect(initialValue);
                return initialValue;
            }
        },
    },
    methods: {
        handleSelect(value: string) {
            // console.log("Control method handleSelect");
            this.$store.commit("changeSafeTreeSelectedId", value);
        },
    },
});
</script>

<template>
    <el-container>
        <el-text>안심보호 자산목록</el-text>
        <el-select @change="handleSelect" v-model="getSelectedId" placeholder="자산 선택">
            <el-option
                v-for="(asset, idx) in optionList"
                :key="idx"
                :value="asset.value"
                :label="asset.label"
            ></el-option>
        </el-select>
    </el-container>
</template>
