const dataScreenRouter= {
		path: "/dataScreen",
		name: "dataScreen",
		meta: {
			title: "可视化大屏",
			icon:'Histogram'
		},
		component: () => import("@/views/dataScreen/index.vue")
	}
;

export default dataScreenRouter;
