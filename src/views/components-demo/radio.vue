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
                <el-radio v-model="radio4" label="1" >备选项</el-radio>
                <el-radio v-model="radio4" label="2">备选项1</el-radio>
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
                <el-radio v-model="radio1" disabled label="disabled">备选项 1</el-radio>
                <el-radio v-model="radio1" disabled label="selected and disabled"
                >备选项 2</el-radio
                >
            </div>
        </el-card>

        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>单选框组
                  </span>
                </div>
            </template>
            <div>
                <el-radio-group v-model="radio">
                    <el-radio :label="3">备选项 1</el-radio>
                    <el-radio :label="6">备选项 2</el-radio>
                    <el-radio :label="9">备选项 3</el-radio>
                </el-radio-group>
            </div>
        </el-card>

        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>按钮样式
                  </span>
                </div>
            </template>
            <div>
                <el-radio-group v-model="radio2">
                    <el-radio-button label="上海" />
                    <el-radio-button label="北京" />
                    <el-radio-button label="广州" />
                    <el-radio-button label="深圳" />
                </el-radio-group>
            </div>
        </el-card>

        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>带有边框
                  </span>
                </div>
            </template>
            <div>
                <el-radio v-model="radio3" label="1" border>备选项1</el-radio>
                <el-radio v-model="radio3" label="2" border>备选项2</el-radio>
            </div>
        </el-card>


    </div>
</template>
<script lang="ts" setup>
    import { Edit, View as IconView } from '@element-plus/icons-vue'
    import { ref } from 'vue'

    const radio = ref(3)
    const radio1 = ref('selected and disabled')
    const radio2 = ref('上海')
    const radio3 = ref('1')
    const radio4 = ref('1')
</script>
<style scoped>
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
