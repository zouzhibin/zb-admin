<template>
  <el-card header="信息列表" class="m-list">
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in 20">
        <el-card class="inner" >
          <div class="header">
            <div class="title">
              <div class="border"></div>
              <div>年度考核目标</div>
              <div class="text">张三   |   2022-12-30  10:38:24</div>
            </div>
          </div>
          <div class="footer">
            <div class="flex-center item-child">
              <el-icon><View /></el-icon>
              <span class="text">预览</span>
            </div>
            <div class="flex-center item-child">
              <el-icon><Edit /></el-icon>
              <span class="text">编辑</span>
            </div>
            <div class="flex-center item-child">
              <el-icon><Delete /></el-icon>
              <span class="text">删除</span>
            </div>
          </div>
      </el-card>
      </el-col>
    </el-row>
    <Pagination/>
  </el-card>
</template>

<script lang="ts" setup>
import Pagination from './Pagination'
</script>

<style lang="scss" scoped>
.m-list{
  margin-top: 10px;
  .header{
    padding: 20px;
    position: relative;
    display: flex;
    .text{
      margin-top: 10px;
      font-size: 12px;
      color: #D7D7D7;
    }
    .title{
      position: relative;
      padding-left: 20px;
    }

  }
  .border{
    left: 0;
    position: absolute;
    border-left:2px solid $primaryColor;
    height: 100%;
  }
  .footer{
    border-top: 1px solid #e4e7ed;
    display: flex;
    justify-content: space-between;
    .text{
      margin-left: 6px;
    }
    .item-child{
      flex: 1;
      padding: 10px 0;
      color: #7F7F7F;
      position: relative;
      cursor: pointer;
      font-size: 12px;
    }
    .item-child:after{
      position: absolute;
      right: 0;
      content: '';
      display: block;
      height: 20px;
      border-right:1px solid #e4e7ed;
    }
    .item-child:last-child:after{
      display: none;
    }
  }
  .inner{
    ::v-deep(.el-card__body){
      padding: 0;
    }

  }
  ::v-deep(.el-col){
    margin-bottom: 20px;
  }

}
</style>
