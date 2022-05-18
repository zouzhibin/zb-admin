
<template>
    <div>
        <el-input v-model="inputData" placeholder="请输入" style="width:400px;max-width:100%;" />
        <el-button type="primary" @click="handleQrcode(1)">
            <el-icon style="margin-right: 6px"><collection /></el-icon> 生成二维码
        </el-button>
        <el-button type="primary" @click="handleQrcode(2)">生成带logo</el-button>
        <div>
            <vue-qr  :logoSrc="src" :text="inputData" :size="200"></vue-qr>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import {ref} from 'vue'
    import vueQr from 'vue-qr/src/packages/vue-qr.vue'
    import three from '@/assets/logo.png'
    const src = ref(null)
    const src2 = ref()
    import clip from '@/utils/clipboard'
    const inputData = ref('https://github.com/zouzhibin/vue-admin-perfect')

    const handleQrcode = (type)=> {
        switch (type) {
            case 1:
                src.value=null
                return
            case 2:
                src.value=three
                return;
        }
    }

</script>
