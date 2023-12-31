<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { ElContainer, ElSelect, ElOption } from "element-plus";

import { FeatureAsset } from "@/services/interfaces/common.interface";

export default defineComponent({
    name: "ControlHeader",
    components: { ElContainer, ElSelect, ElOption },
    props: {
        selectedId: String,
        assetData: Object as PropType<FeatureAsset[] | undefined>,
        pageType: String,
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
            if (this.$props.pageType === "safe-tree") {
                this.$store.commit("changeSafeTreeSelectedId", value);
            } else {
                this.$store.commit("changeSecuritySelectedId", value);
            }
        },
    },
});
</script>

<template>
    <el-container>
        <div class="control-header">
            <div class="control-label">자산 선택</div>
            <el-select
                class="control-header-select"
                @change="handleSelect"
                v-model="getSelectedId"
                placeholder="자산 선택"
            >
                <el-option
                    v-for="(asset, idx) in optionList"
                    :key="idx"
                    :value="asset.value"
                    :label="asset.label"
                ></el-option>
            </el-select>
        </div>
    </el-container>
</template>

<style lang="scss">
.control-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    .control-header-select {
        width: 280px;
    }
    .control-label {
        color: white;
        font-size: 18px;
        margin-bottom: 12px;
    }
}
</style>
