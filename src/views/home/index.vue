
<template>
  <div style="width: 100%;">
    <el-row class="row-bg" :gutter="10">
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card">
          <div class="personal">
            <div>
              <el-avatar size="50" :src="circleUrl" />
            </div>
            <div class="name"></div>
            <div class="description"></div>
            <div class="list">
              <div>昵称：有你</div>
              <div>职业：前端开发</div>
              <div>公司：小公司</div>
              <div>年龄：1993/09</div>
              <div>性别：男</div>
              <div>现住址：中国-浙江-杭州</div>
              <div>邮箱：1135957121@qq.com</div>
              <div>技术栈：JavaScript、HTML、CSS、Vue、Node、React</div>
            </div>
            <el-divider></el-divider>
            <div style="margin-bottom: 15px"><h5>个性标签</h5></div>
            <div>
              <el-tag style="margin-right: 10px">怕麻烦</el-tag>
              <el-tag style="margin-right: 10px">健身运动</el-tag>
              <el-tag style="margin-right: 10px">睡觉</el-tag>
              <el-tag style="margin-right: 10px">漫威</el-tag>
              <el-tag>向往</el-tag>
            </div>
            <el-divider></el-divider>
            <div style="margin-bottom: 15px"><h5>最喜欢的一句话</h5></div>
            <div>---------- 开心最重要</div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="16">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>系列开源产品</span>
            </div>
          </template>
          <div style="display: flex">
            <el-card style="flex: 1;margin-right: 20px" class="card-item">
              <div style="color: white;margin-bottom: 10px"><h3>zb-table</h3></div>
              <div style="font-size: 12px;color: white">uniapp 表格组件 支持固定表头和首列、上拉加载更多、及固定多列，表格自适应内容，排序，多选checkbox、可点击删除，编辑、合计功能，兼容多端</div>
            </el-card>
            <el-card style="flex: 1;" class="card-item">
              <div style="color: white;margin-bottom: 10px"><h3>vue-admin-plus</h3></div>
              <div style="font-size: 12px;color: white">系统基于vue3+vuex+ element-plus+ts后台管理系统</div>
            </el-card>
          </div>
        </el-card>
        <el-card class="box-card">
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')


</script>

<style scoped lang="scss">
.personal{
  .name{
    margin-top: 15px;
    font-size: 24px;
    font-weight: 500;
    color: rgb(38, 38, 38);
  }
  .description{
    margin-top: 8px;
  }
  .list{
    margin-top: 18px;
    line-height: 30px;
    text-align: left;
  }
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  //height: 100%;
  margin-bottom: 10px;
  width: 100%;
}
.card-item{

  background: linear-gradient(50deg, #1890ff, #77e19d);
}
</style>
