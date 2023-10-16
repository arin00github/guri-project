<script lang="ts">
import { defineComponent } from "vue";

import ControlHeader from "@/components/ControlHeader.vue";
import ControlContainer from "@/components/security/ControlContainer.vue";
import { getSecurityZoneAssets } from "@/services/api/apiCollection";
import { FeatureAsset } from "@/services/interfaces/common.interface";

export default defineComponent({
    name: "SecurityDeviceControl",
    components: { ControlHeader, ControlContainer },
    computed: {
        selectedId(): string | undefined {
            return this.$store.getters.getSecuritySelectedId;
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
            getSecurityZoneAssets("")
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
        <ControlHeader :selected-id="selectedId" :asset-data="assetListData" page-type="security" />
        <ControlContainer :selected-id="selectedId" />
    </div>
</template>
