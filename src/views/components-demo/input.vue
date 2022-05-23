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
                <el-input v-model="input" placeholder="请输入内容" />
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
                <el-input v-model="input" disabled placeholder="请输入内容" />
            </div>
        </el-card>

        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>一键清空
                  </span>
                </div>
            </template>
            <div>
                <el-input v-model="input" placeholder="请输入内容" clearable />
            </div>
        </el-card>

        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>格式化
                  </span>
                </div>
            </template>
            <div>
                <el-input
                        v-model="input"
                        placeholder="请输入内容"
                        :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                        :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
                />
            </div>
        </el-card>

        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>密码框
                  </span>
                </div>
            </template>
            <div>
                <el-input
                        v-model="input"
                        type="password"
                        placeholder="请输入密码"
                        show-password
                />
            </div>
        </el-card>

        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>带 icon 的输入框
                  </span>
                </div>
            </template>
            <div>
                <el-input
                        v-model="input"
                        placeholder="请输入内容"
                        :suffix-icon="Calendar"
                />
                <el-input
                        v-model="input2"
                        placeholder="请输入内容"
                        :prefix-icon="Search"
                />
            </div>
        </el-card>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>文本域
                  </span>
                </div>
            </template>
            <div>
                <el-input
                        v-model="textarea"
                        :rows="2"
                        type="textarea"
                        placeholder="请输入内容"
                />
            </div>
        </el-card>

    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    import { Calendar, Search } from '@element-plus/icons-vue'
    const input = ref('')
    const input2 = ref('')
    const textarea = ref('')

</script>
<style>
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .box-card {
        width: 100%;
        margin-bottom:20px;
    }
</style>
