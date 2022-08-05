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
				{title: '源码地址', url: 'https://github.com/zouzhibin/vue-admin-perfect'},
				{title: '文档地址', url: 'https://github.com/zouzhibin/vue-admin-perfect'},
			],
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
