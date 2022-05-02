<template>
    <div>
        <el-input v-model="inputData" placeholder="请输入" style="width:400px;max-width:100%;" />
        <el-button type="primary" @click="handleCopy(inputData,$event)">
            <el-icon style="margin-right: 6px"><document-copy /></el-icon> 复制
        </el-button>
    </div>
</template>
<script lang="ts" setup>
    import {ref} from 'vue'
    import clip from '@/utils/clipboard'
    const inputData = ref('https://github.com/zouzhibin/vue-admin-perfect')

    const handleCopy = (text, event)=> {
        clip(text, event)
    }
</script>