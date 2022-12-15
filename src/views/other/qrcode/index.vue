<template>
  <PageWrapLayout>
    <div style="display: flex">
      <el-input v-model="inputData" placeholder="请输入" style="width: 400px; max-width: 100%" />
      <el-button type="primary" @click="handleQrcode(1)">
        <el-icon style="margin-right: 6px"><collection /></el-icon> 生成普通二维码
      </el-button>
      <el-button type="primary" @click="handleQrcode(2)">生成带logo</el-button>
      <el-button type="primary" @click="handleQrcode(3)">生成随机颜色二维码</el-button>
      <el-button type="primary" @click="handleQrcode(4)">下载</el-button>
    </div>
    <div>
      <vue-qr :logoSrc="logoSrc" :text="inputData" :size="200" :callback="qrcodeCallback" :color-dark="randomColor" ></vue-qr>
    </div>

    <el-descriptions title="配置项 " :column="1" border class="descriptions">
      <el-descriptions-item label="官方文档"> <a href="https://github.com/Binaryify/vue-qr" target="_blank">https://github.com/Binaryify/vue-qr</a> </el-descriptions-item>
      <el-descriptions-item label="text"> 二维码内容，默认为 'https://github.com/zouzhibin/vue-admin-perfect' </el-descriptions-item>
      <el-descriptions-item label="logoSrc"> 嵌入至二维码中心的 LOGO 地址 </el-descriptions-item>
      <el-descriptions-item label="size"> 尺寸, 长宽一致, 包含外边距，默认为 200 </el-descriptions-item>
      <el-descriptions-item label="margin"> 二维码图像的外边距, 默认 20px </el-descriptions-item>
      <el-descriptions-item label="logoMargin"> 标识周围的空白边框, 默认为0 </el-descriptions-item>
      <el-descriptions-item label="correctLevel"> 容错级别 0-3 </el-descriptions-item>
      <el-descriptions-item label="autoColor"> 若为 true, 背景图的主要颜色将作为实点的颜色, 即 colorDark,默认 true </el-descriptions-item>
      <el-descriptions-item label="colorDark"> 实点的颜色,默认颜色值 =>黑色 </el-descriptions-item>
      <el-descriptions-item label="colorLight"> 空白区的颜色 </el-descriptions-item>
      <el-descriptions-item label="callback"> 生成的二维码 Data URI 可以在回调中取得,第一个参数为二维码 data URL, 第二个参数为 props 传过来的 qid(因为二维码生成是异步的,所以加个 id 用于排序) </el-descriptions-item>
    </el-descriptions>
  </PageWrapLayout>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import vueQr from 'vue-qr/src/packages/vue-qr.vue'
  import three from '@/assets/image/logo.png'
  import { getColor } from '@/utils/index'
  const logoSrc = ref(null)
  const qrcodeUrl = ref(null)
  const randomColor = ref('black')
  const inputData = ref('https://github.com/zouzhibin/vue-admin-perfect')

  const handleQrcode = (type) => {
    switch (type) {
      case 1:
        randomColor.value = 'black'
        logoSrc.value = null
        return
      case 2:
        logoSrc.value = three
        return
      case 3:
        randomColor.value = getColor()
        return
      case 4:
        let name  = new Date().getTime();
        let a = document.createElement("a");
        a.style.display = "none";
        a.download = name;
        a.href = qrcodeUrl.value;
        document.body.appendChild(a);
        a.click();
        a.remove()
        return;
    }
  }

  const qrcodeCallback = (url)=>{
    qrcodeUrl.value = url
  }
</script>
