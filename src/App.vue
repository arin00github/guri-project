<script lang="ts">
import { defineComponent } from "vue";

import { ElContainer, ElHeader, ElButton, ElButtonGroup } from "element-plus";
export default defineComponent({
    name: "App",
    components: { ElContainer, ElHeader, ElButton, ElButtonGroup },
    data() {
        return {
            menus: [
                { label: "안심트리장치제어", url: "/safe-tree/device-control", id: "safe-tree-device-control" },
                { label: "안심장치제어", url: "/security/device-control", id: "security-device-control" },
            ],
        };
    },
});
</script>

<template>
    <el-container>
        <el-header>
            <el-button-group>
                <el-button v-for="menu in menus" :key="menu.id">
                    <router-link :to="menu.url">{{ menu.label }}</router-link>
                </el-button>
            </el-button-group>
        </el-header>
        <el-container class="w-100">
            <router-view />
        </el-container>
    </el-container>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
section.el-container > div {
    width: 100%;
}
.d-flex {
    display: flex;
}
</style>
