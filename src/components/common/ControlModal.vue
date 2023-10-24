<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ElDialog } from "element-plus";

import { controlType } from "@/services/interfaces/control.interface";
import { deviceProperty } from "@/utils/constant";

export default defineComponent({
    name: "ControlModal",
    components: { ElDialog },
    props: {
        isOpen: Boolean,
        // handClose: Object as PropType<void>,
        controlData: Object as PropType<Record<string, string | number>>,
    },
    created() {
        // this.modalIsOpen = this.$props.isOpen;
        this.modalIsOpen = true;
        if (this.$props.controlData) {
            this.initiateForm(this.$props.controlData);
        }
    },
    data() {
        return {
            modalIsOpen: false,
            controls: undefined as controlType[] | undefined,
        };
    },
    methods: {
        initiateForm(devData: Record<string, string | number>) {
            //
            const newDevData: controlType[] = [];
            Object.entries(devData).forEach(entry => {
                const findProperty = deviceProperty.find(prop => prop.enName === entry[0]);
                if (findProperty) {
                    const newObeject: controlType = {
                        label: findProperty.krName,
                        key: findProperty.enName,
                        type: findProperty.type || "",
                        value: entry[1],
                    };
                    newDevData.push(newObeject);
                }
            });
            this.controls = newDevData;
        },
        /**
         * @description 날짜 (ex. 1221) 형태를 다른 날짜형태 (2023-12-21)로 바꿔주는 함수
         * @param dateString 네자리 숫자로 구성된 문자열
         */
        transformDateString(dateString: string) {
            const newString = dateString;
            const newDay = new Date(`${new Date().getFullYear()}-${newString.slice(0, 2)}-${newString.slice(2)}`);
            return `${newDay.toISOString().split("T")[0]}`;
        },
    },
});
</script>
<template>
    <el-dialog v-model="modalIsOpen"> 모달창 </el-dialog>
</template>
<style>
/* .stats-row {
    display: flex;
} */
</style>
