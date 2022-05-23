<template>
    <div>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
        <span>基础用法
      </span>
                </div>
            </template>
            <div>
                <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
                <el-link type="primary">主要链接</el-link>
                <el-link type="success">成功链接</el-link>
                <el-link type="warning">警告链接</el-link>
                <el-link type="danger">危险链接</el-link>
                <el-link type="info">信息链接</el-link>
            </div>
        </el-card>

        <el-card class="box-card">
            <template #header>
                <div class="card-header">
        <span>禁用状态
      </span>
                </div>
            </template>
            <div>
                <el-link disabled>默认链接</el-link>
                <el-link type="primary" disabled>主要链接</el-link>
                <el-link type="success" disabled>成功链接</el-link>
                <el-link type="warning" disabled>警告链接</el-link>
                <el-link type="danger" disabled>危险链接</el-link>
                <el-link type="info" disabled>信息链接</el-link>
            </div>
        </el-card>

        <el-card class="box-card">
            <template #header>
              <div class="card-header">
                    <span>下划线
                  </span>
                </div>
            </template>
            <div>
                <el-link :underline="false">无下划线</el-link>
                <el-link>有下划线</el-link>
            </div>
        </el-card>

        <el-card class="box-card">
            <template #header>
                  <div class="card-header">
                    <span>图标
                  </span>
                </div>
            </template>
            <div>
                <el-link :icon="Edit">编辑</el-link>
                <el-link>
                    查看<el-icon class="el-icon--right"><icon-view /></el-icon>
                </el-link>
            </div>
        </el-card>


    </div>
</template>
<script lang="ts" setup>
    import { Edit, View as IconView } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .el-link {
        margin-right: 8px;
    }
    .el-link .el-icon--right.el-icon {
        vertical-align: text-bottom;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .box-card {
        width: 100%;
        margin-bottom:20px;
    }
</style>
