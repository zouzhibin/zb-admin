
<template>
    <u-container-layout class="m-error-page">
        <div class="error-page">
            <div class="img">
                <img :src="fourPng" style="width: 100%">
            </div>
            <div>
                <div class="oops">抱歉!</div>
                <div class="text" style="margin-bottom: 20px">你没有权限去该页面...</div>
                <el-button type="primary" @click="goBackHome">返回首页</el-button></div>

        </div>
    </u-container-layout>
</template>

<script lang="ts" setup>
    import fourPng from '@/assets/image/error/401.gif'
    import {useRouter} from 'vue-router'
    const router = useRouter()

    const goBackHome = ()=>{
        router.push({
            path:'/'
        })
    }
</script>

<style lang="scss" scoped>
    .m-error-page{
        width:100%;
        height: 100%;
        display: flex;
        align-items: center;
        min-height: calc(100vh - 205px);
        justify-content: center;
    }
    .error-page{
        /*position: absolute;*/
        /*top: 0;*/
        padding-top: 20px;
        /*left: 0;*/
        /*right: 0;*/
        /*background: white;*/
        /*bottom: 0;*/
        display: flex;
        align-items: center;
        .img{
            width: 500px;
        }
        .oops{
            font-size: 32px;
            line-height: 40px;
            color: #1482f0;
            margin-bottom: 20px;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
        }
        .text{
            font-size: 20px;
            line-height: 24px;
            color: #222;
            margin-bottom: 10px;
            -webkit-animation-delay: .1s;
            animation-delay: .1s;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
        }
    }
</style>
