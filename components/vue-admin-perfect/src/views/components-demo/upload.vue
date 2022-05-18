<template>
    <div>
        <u-upload @update="update" v-model="imgs"/>
    </div>
</template>

<script setup lang="ts">
    import UUpload from '@/components/u-upload/index.vue'
    import TwoPng from '@/assets/3.png'
    import {reactive, ref} from 'vue'
    const imgs  = ref([{
        url:TwoPng,
        name:'female.png',
        uid:'1651408956803',
        status:'success'
    }])

    const update = (val)=>{
        console.log('valll======',val)
    }
</script>

<style>

</style>