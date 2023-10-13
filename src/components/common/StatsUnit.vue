<script lang="ts">
import { defineComponent } from "vue";

import { ElText } from "element-plus";

export default defineComponent({
    name: "StatsUnit",
    components: { ElText },
    props: {
        label: String,
        statsValue: String || Number,
    },
});
</script>
<template>
    <el-text class="stats-label">{{ label }}</el-text>
    <el-text class="stats-value">{{ statsValue }}</el-text>
</template>
<style>
.stats-label {
    display: block;
}
.stats-value {
    display: block;
}
</style>
