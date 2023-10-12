<template>
    <el-container>
        <el-text>안심보호 자산목록</el-text>
        <el-select>
            <el-option value="option1" label="option1"></el-option>
            <el-option value="option2" label="option2"></el-option>
        </el-select>
    </el-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ElContainer, ElSelect, ElOption, ElText } from "element-plus";

export default defineComponent({
    name: "ControlHeader",
    components: { ElContainer, ElSelect, ElOption, ElText },
    props: [],
});
</script>
