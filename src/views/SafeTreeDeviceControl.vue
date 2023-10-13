<script lang="ts">
import { defineComponent } from "vue";

import ControlHeader from "@/components/ControlHeader.vue";
import ControlContainer from "@/components/safeTree/ControlContainer.vue";
import { getSafeTreeAssets } from "@/services/api/apiCollection";
import { FeatureAsset } from "@/services/interfaces/common.interface";

export default defineComponent({
    name: "SafeTreeDeviceControl",
    components: { ControlHeader, ControlContainer },
    computed: {
        selectedId(): string | undefined {
            console.log("View computed selected");
            return this.$store.getters.getSafeTreeSelectedId;
        },
    },
    data() {
        return {
            assetListData: [] as FeatureAsset[] | undefined,
        };
    },
    created() {
        console.log("View create");
        this.getAssetList();
    },
    methods: {
        getAssetList() {
            getSafeTreeAssets("")
                .then(res => {
                    this.assetListData = res;
                })
                .catch(err => {
                    console.error(err);
                    this.assetListData = undefined;
                });
        },
    },
});
</script>

<template>
    <div>
        <ControlHeader :selected-id="selectedId" :asset-data="assetListData" />
        <ControlContainer :selected-id="selectedId" />
    </div>
</template>
