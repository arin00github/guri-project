<script lang="ts">
import { defineComponent } from "vue";

import { ElText } from "element-plus";

export default defineComponent({
    name: "StatsUnit",
    components: { ElText },
    props: {
        title: String,
        statsValue: String || Number,
    },
});
</script>
<template>
    <div class="stats-row">
        <el-text class="stats-label">{{ title }}</el-text>
        <el-text class="stats-value">{{ statsValue }}</el-text>
    </div>
</template>
<style>
/* .stats-row {
    display: flex;
} */
.stats-label {
    display: block;
}
.stats-value {
    display: block;
}
</style>
