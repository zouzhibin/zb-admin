<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>基础用法
      </span>
      </div>
    </template>
    <div>
      <el-button class="item">Default</el-button>
      <el-button type="primary"  class="item">Primary</el-button>
      <el-button type="success"  class="item">Success</el-button>
      <el-button type="info"  class="item">Info</el-button>
      <el-button type="warning"  class="item">Warning</el-button>
      <el-button type="danger"  class="item">Danger</el-button>
      <el-button  class="item">中文</el-button>
      <el-button plain  class="item">Plain</el-button>
      <el-button type="primary" plain  class="item">Primary</el-button>
      <el-button type="success" plain  class="item">Success</el-button>
      <el-button type="info" plain  class="item">Info</el-button>
      <el-button type="warning" plain  class="item">Warning</el-button>
      <el-button type="danger" plain  class="item">Danger</el-button>
      <el-button round  class="item">Round</el-button>
      <el-button type="primary" round  class="item">Primary</el-button>
      <el-button type="success" round  class="item">Success</el-button>
      <el-button type="info" round  class="item">Info</el-button>
      <el-button type="warning" round  class="item">Warning</el-button>
      <el-button type="danger" round  class="item">Danger</el-button>
      <el-button :icon="Search" circle  class="item"/>
      <el-button type="primary" :icon="Edit" circle  class="item"/>
      <el-button type="success" :icon="Check" circle  class="item"/>
      <el-button type="info" :icon="Message" circle  class="item"/>
      <el-button type="warning" :icon="Star" circle  class="item"/>
      <el-button type="danger" :icon="Delete" circle  class="item"/>
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
      <el-button disabled class="item">Default</el-button>
      <el-button type="primary" disabled class="item">Primary</el-button>
      <el-button type="success" disabled class="item">Success</el-button>
      <el-button type="info" disabled class="item">Info</el-button>
      <el-button type="warning" disabled class="item">Warning</el-button>
      <el-button type="danger" disabled class="item">Danger</el-button>
      <el-button plain disabled class="item">Plain</el-button>
      <el-button type="primary" plain disabled class="item">Primary</el-button>
      <el-button type="success" plain disabled class="item">Success</el-button>
      <el-button type="info" plain disabled class="item"> Info</el-button>
      <el-button type="warning" plain disabled class="item">Warning</el-button>
      <el-button type="danger" plain disabled class="item">Danger</el-button>
    </div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>文字按钮
      </span>
      </div>
    </template>
    <div>
      <el-button type="text" class="item">文字按钮</el-button>
      <el-button type="text" disabled class="item">文字按钮</el-button>
    </div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>图标按钮
      </span>
      </div>
    </template>
    <div>
      <el-button type="primary" :icon="Edit" class="item"/>
      <el-button type="primary" :icon="Share" class="item"/>
      <el-button type="primary" :icon="Delete" class="item"/>
      <el-button type="primary" :icon="Search" class="item">Search</el-button>
      <el-button type="primary" class="item">
        Upload<el-icon class="el-icon--right"><Upload /></el-icon>
      </el-button>
    </div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>按钮组
      </span>
      </div>
    </template>
    <div>
      <el-button type="primary" :icon="ArrowLeft" class="item">上一页</el-button>
      <el-button type="primary" class="item">
        下一页<el-icon class="el-icon--right"><ArrowRight /></el-icon>
      </el-button>
      <el-button type="primary" :icon="Edit" class="item"/>
      <el-button type="primary" :icon="Share" class="item"/>
      <el-button type="primary" :icon="Delete" class="item"/>
    </div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>加载中
      </span>
      </div>
    </template>
    <div>
      <el-button type="primary" loading class="item">Loading</el-button>
      <el-button type="primary" :loading-icon="Eleme" loading class="item">Loading</el-button>
      <el-button type="primary" loading class="item">
        <template #loading>
          <div class="custom-loading">
            <svg class="circular" viewBox="-10, -10, 50, 50">
              <path
                  class="path"
                  d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          "
                  style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
              />
            </svg>
          </div>
        </template>
        Loading
      </el-button>
    </div>
  </el-card>


  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>自定义颜色
      </span>
      </div>
    </template>
    <div>
      <el-button color="#626aef" :dark="isDark" class="item">Default</el-button>
      <el-button color="#626aef" :dark="isDark" plain class="item">Plain</el-button>

      <el-button color="#626aef" :dark="isDark" disabled class="item">Disabled</el-button>
      <el-button color="#626aef" :dark="isDark" disabled plain class="item"
      >Disabled Plain</el-button
      >
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Share,
  Star,
} from '@element-plus/icons-vue'
</script>
<style>
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
  width: 100%
}
</style>
