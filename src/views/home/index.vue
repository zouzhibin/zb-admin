<template>
  <div class="home-container">
    <el-row class="row-bg" :gutter="10">
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card" style="height: 100%">
          <el-image
            class="wechat"
            :src="weLogo"
            :preview-src-list="[weLogo]"
            style="max-width: 200px"
            :data-resid="Date.now()"
          />
          <div class="personal">
            <div>
              <el-avatar :size="50" :src="AvatarLogo" />
            </div>
            <div class="name"></div>
            <div class="description"></div>
            <div class="list">
              <div
                ><span class="label">{{ $t('home.nickName') }}</span
                >：{{ $t('home.Wolf') }}</div
              >
              <div
                ><span class="label">{{ $t('home.job') }}</span
                >：{{ $t('home.web') }}</div
              >
              <div
                ><span class="label">{{ $t('home.company') }}</span
                >：小公司</div
              >
              <div
                ><span class="label">{{ $t('home.age') }}</span
                >：~~</div
              >
              <div
                ><span class="label">{{ $t('home.sex') }}</span
                >：{{ $t('home.male') }}</div
              >
              <div
                ><span class="label">{{ $t('home.currentAddress') }}</span
                >：中国-浙江-杭州</div
              >
              <div
                ><span class="label">{{ $t('home.mail') }}</span
                >：1135957121@qq.com</div
              >
              <div
                ><span class="label">{{ $t('home.WeChat') }}</span
                >： 微信：19550102670(欢迎加微信入群)</div
              >
              <div
                ><span class="label">{{ $t('home.technologyStack') }}</span
                >：JavaScript、HTML、CSS、Vue、Node、React</div
              >
            </div>
            <el-divider></el-divider>
            <div style="margin-bottom: 15px"
              ><h5>{{ $t('home.PersonalityLabel') }}</h5></div
            >
            <div>
              <el-tag style="margin-right: 10px">{{ $t('home.trouble') }}</el-tag>
              <el-tag style="margin-right: 10px">{{ $t('home.fitness') }}</el-tag>
              <el-tag style="margin-right: 10px">{{ $t('home.sleep') }}</el-tag>
              <el-tag style="margin-right: 10px">{{ $t('home.Marvel') }}</el-tag>
              <el-tag>向往</el-tag>
            </div>
            <el-divider></el-divider>
            <div style="margin-bottom: 15px"
              ><h5>{{ $t('home.favoriteSentence') }}</h5></div
            >
            <div>---------- {{ $t('home.happy') }}</div>
            <el-divider></el-divider>
            <div style="margin-bottom: 15px"
              ><h5>{{ $t('home.impression') }}~~</h5></div
            >
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="16">
        <el-row class="custom" :gutter="10">
          <el-col :xs="24" :sm="12" :lg="8">
            <el-card style="margin-bottom: 10px">
              <div class="grid-content">
                <div class="left"
                  ><el-icon style="font-size: 24px; color: white"><user /></el-icon
                ></div>
                <div class="right">
                  <div class="h2" style="color: #2d8cf0">
                    <count-to
                      :start-val="0"
                      :end-val="5268"
                      :duration="2000"
                      :autoplay="true"
                    ></count-to
                  ></div>
                  <div>用户访问量 </div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-card style="margin-bottom: 10px">
              <div class="grid-content">
                <div class="left" style="background: #64d572"
                  ><el-icon style="font-size: 24px; color: white"><user /></el-icon
                ></div>
                <div class="right">
                  <div class="h2" style="color: #64d572">
                    <count-to
                      :start-val="0"
                      :end-val="9599"
                      :duration="2000"
                      :autoplay="true"
                    ></count-to
                  ></div>
                  <div>系统消息 </div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-card style="margin-bottom: 10px">
              <div class="grid-content">
                <div class="left" style="background: #f25e43"
                  ><el-icon style="font-size: 24px; color: white"><user /></el-icon
                ></div>
                <div class="right">
                  <div class="h2" style="color: #f25e43"
                    ><count-to
                      :start-val="0"
                      :end-val="595453"
                      :duration="2000"
                      :autoplay="true"
                    ></count-to
                  ></div>
                  <div>数量 </div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>系列开源产品</span>
            </div>
          </template>
          <div style="display: flex">
            <el-card
              style="flex: 1; margin-right: 20px; cursor: pointer"
              class="card-item"
              @click="goTo('https://ext.dcloud.net.cn/plugin?id=7511')"
            >
              <div style="color: white; margin-bottom: 10px"><h3>zb-table</h3></div>
              <div style="font-size: 12px; color: white"
                >uniapp 表格组件
                支持固定表头和首列、上拉加载更多、及固定多列，表格自适应内容，排序，多选checkbox、可点击删除，编辑、合计功能，兼容多端</div
              >
            </el-card>
            <el-card
              style="flex: 1; cursor: pointer"
              class="card-item"
              @click="goTo('https://github.com/zouzhibin/vue-admin-perfect')"
            >
              <div style="color: white; margin-bottom: 10px"><h3>vue-admin-perfect</h3></div>
              <div style="font-size: 12px; color: white"
                >系统基于vue3+vuex+ element-plus+ts后台管理系统</div
              >
            </el-card>
          </div>
        </el-card>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>每周用户活跃量</span>
            </div>
          </template>
          <div>
            <bar-charts height="300px" width="100%" id="bar1"></bar-charts>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
  import { User } from '@element-plus/icons-vue'
  import AvatarLogo from '@/assets/image/avatar.png'
  import CountTo from '@/components/CountTo/index.vue'
  import BarCharts from '@/views/echarts/simple/components/bar.vue'
  import weLogo from '@/assets/image/we.png'
  const goTo = (url) => {
    window.open(url, '_blank')
  }</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
