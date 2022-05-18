<template>
	<div class="app-container">
		<!-- <iframe
		   name="iframeMap"
		   id="iframeMapViewComponent"
		   width="100%"
		   height="580px"
		   v-bind:src="smgHtmlPath"
		   frameborder="0"
		   scrolling="y"
		   ref="iframeDom"
		  ></iframe> -->
		<div>
			<div v-for="(item,index) in links" :key="index">
				<span class="text" @click="goto(item.url)">{{ item.title }}</span>
			</div>
			
			
			<div class="flink">
				<span class="flink-title">友情链接</span>
				<div v-for="(item,index) in flinks" :key="index">
					<span class="text" @click="goto(item.url)">{{ item.title }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			links: [
				{title: '源码地址', url: 'https://gitee.com/nickzhan/uni-element-ui-admin'},
				{title: '文档地址', url: 'https://gitee.com/nickzhan/uni-element-ui-admin/blob/master/README.md'},
				{title: 'DCloud插件市场地址', url: 'https://ext.dcloud.net.cn/plugin?id=5953'},
				{title: '作者的博客园', url: 'https://www.cnblogs.com/mihuk'},
			],
			flinks: [
				{title: 'ElementUI-V2官网', url: 'https://element.eleme.cn/#/zh-CN'}
			]
		}
	},
	methods: {
		goto(url) {
		  window.open(url)
		}
	}
};
</script>
<style scoped>
	.text {
		font-size: 28upx;
		margin: 10upx 0;
		display: inline-block;
	}
	.text:hover {
		text-decoration:underline;
		cursor: pointer;
	}
	.flink {
		margin-top: 40upx;
	}
	.flink-title {
		font-size: 36upx;
		font-weight: bold;
	}
</style>
