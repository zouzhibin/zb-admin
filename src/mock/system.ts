export const userData =[
    {
        username:'zzb',
        nickname:'林峰',
        sex:'男',
        role:'超级管理员',
        status:true,
        photo:'15333333333',
        describe:'超级管理员不可删除',
        createTime:'2022-09-02 15:30:20',
    },
    {
        username:'zhangsan',
        nickname:'张三',
        sex:'女',
        role:'管理员',
        status:true,
        photo:'15311111111',
        describe:'管理员不可删除',
        createTime:'2022-09-02 15:30:20',
    },
    {
        username:'lisi',
        nickname:'李四',
        sex:'男',
        role:'管理员',
        status:true,
        photo:'13823456789',
        describe:'测试账户',
        createTime:'2022-09-02 15:30:20',
    },
    {
        username:'wangwu',
        nickname:'王五',
        sex:'男',
        role:'超级管理员',
        status:false,
        photo:'13923456789',
        describe:'超级管理员不可删除',
        createTime:'2022-09-02 15:30:20',
    },
    {
        username:'zhaoliu',
        nickname:'赵柳',
        sex:'男',
        role:'普通用户',
        status:false,
        photo:'14523456789',
        describe:'普通测试用户',
        createTime:'2022-09-02 15:30:20',
    },

]


export const deptData =[
    {
    "id": "0",
    "deptName": "华东分部",
    "orderNo": 1,
    "createTime": "2011-02-25 18:37:39",
    "remark": "世上无难事，只要肯登攀",
    "status": false,
    "children": [{
        "id": "0-0",
        "deptName": "研发部",
        "orderNo": 1,
        "createTime": "1995-10-07 03:22:40",
        "remark": "不曾扬帆，何以至远方",
        "status": true,
        "parentDept": "0"
    }, {
        "id": "0-1",
        "deptName": "市场部",
        "orderNo": 2,
        "createTime": "1972-06-20 09:33:40",
        "remark": "努力到无能为力，拼搏到感动自己",
        "status": false,
        "parentDept": "0"
    }, {
        "id": "0-2",
        "deptName": "商务部",
        "orderNo": 3,
        "createTime": "1992-10-31 02:54:45",
        "remark": "没有过不了的坎，就怕自己不奋斗",
        "status": false,
        "parentDept": "0"
    }, {
        "id": "0-3",
        "deptName": "财务部",
        "orderNo": 4,
        "createTime": "1971-07-06 13:01:49",
        "remark": "没有口水与汗水，就没有成功的泪水。",
        "status": true,
        "parentDept": "0"
    }]
}, {
    "id": "1",
    "deptName": "华南分部",
    "orderNo": 2,
    "createTime": "1995-12-24 06:36:26",
    "remark": "这个世界从来不缺乏机遇，而是缺少抓住机遇的手。",
    "status": false,
    "children": [{
        "id": "1-0",
        "deptName": "研发部",
        "orderNo": 1,
        "createTime": "2022-05-10 12:44:05",
        "remark": "奋斗令我们的生活充满生机，责任让我们的生命充满意义！",
        "status": true,
        "parentDept": "1"
    }, {
        "id": "1-1",
        "deptName": "市场部",
        "orderNo": 2,
        "createTime": "2022-07-15 02:53:29",
        "remark": "学习之心不可无，懒惰之心不可有。",
        "status": true,
        "parentDept": "1"
    },
        {
        "id": "1-2",
        "deptName": "商务部",
        "orderNo": 3,
        "createTime": "2022-08-11 22:44:55",
        "remark": "学会等待，学会坚持，成功是一个循序渐进的过程。",
        "status": true,
        "parentDept": "1"
    }, {
        "id": "1-3",
        "deptName": "财务部",
        "orderNo": 4,
        "createTime": "2022-10-26 19:38:29",
        "remark": "能克服困难的人，可使困难化为良机",
        "status": false,
        "parentDept": "1"
    }
    ]
}, {
    "id": "2",
    "deptName": "西北分部",
    "orderNo": 3,
    "createTime": "2022-08-27 16:49:21",
    "remark": "行为决定性格，性格决定命运",
    "status": false,
    "children": [{
        "id": "2-0",
        "deptName": "研发部",
        "orderNo": 1,
        "createTime": "2022-12-11 03:49:33",
        "remark": "带着自己的梦，以一种骄傲的姿态走下去",
        "status": false,
        "parentDept": "2"
    }, {
        "id": "2-1",
        "deptName": "市场部",
        "orderNo": 2,
        "createTime": "2022-06-18 20:15:34",
        "remark": "当世界都在说放弃的时候，轻轻的告诉自己：再试一次",
        "status": true,
        "parentDept": "2"
    }, {
        "id": "2-2",
        "deptName": "商务部",
        "orderNo": 3,
        "createTime": "2022-07-17 09:37:41",
        "remark": "不怕万人阻挡在前方，只怕自己先行投降",
        "status": true,
        "parentDept": "2"
    }, {
        "id": "2-3",
        "deptName": "财务部",
        "orderNo": 4,
        "createTime": "2022-11-23 04:34:33",
        "remark": "胸怀临云志，莫负少年时",
        "status": false,
        "parentDept": "2"
    }]
}]


export const roleData =[
    {
        roleName:'超级管理员',
        roleId:'admin',
        roleIdentification:'admin',
        describe:'这是超级管理员，拥有一切权限',
        createTime:'2022-09-02 15:30:20',
    },
    {
        roleName:'管理员',
        roleId:'role',
        roleIdentification:'admin',
        describe:'普通管理员',
        createTime:'2022-09-02 15:30:20',
    },
    {
        roleName:'普通用户',
        roleId:'other',
        describe:'测试用户',
        roleIdentification:'other',
        createTime:'2022-09-02 15:30:20',
    },

]


export const menuData =[
    {
        menuName:'首页',
        menuType:'菜单',
        menuRouter:'/home',
        identification:'menu:home',
        parentId:0,
        level:1,
        id:0,
        createTime:'2022-09-02',
    },
    {
        menuName:'表格',
        menuType:'目录',
        menuRouter:'/table',
        identification:'menu:table',
        parentId:0,
        level:1,
        id:1,
        createTime:'2022-09-02',
        children:[
            {
                menuName:'菜单1',
                menuType:'菜单',
                menuRouter:'/table',
                identification:'menu1:view',
                parentId:1,
                level:2,
                id:10,
                createTime:'2022-09-02',
                children:[
                    {
                        menuName:'按钮1',
                        menuType:'按钮',
                        menuRouter:'/table',
                        identification:'menu1:view:btn1',
                        parentId:10,
                        id:20,
                        level:3,
                        createTime:'2022-09-02',
                    },
                    {
                        menuName:'按钮2',
                        menuType:'按钮',
                        menuRouter:'/table',
                        identification:'menu1:view:btn2',
                        parentId:10,
                        id:21,
                        level:3,
                        createTime:'2022-09-02',
                    },
                    {
                        menuName:'按钮3',
                        menuType:'按钮',
                        menuRouter:'/table',
                        identification:'menu1:view:btn2',
                        parentId:10,
                        id:22,
                        level:3,
                        createTime:'2022-09-02',
                    }
                ]
            }
        ]
    },

    {
        menuName:'可视化图表',
        menuType:'目录',
        menuRouter:'/charts',
        identification:'menu:charts',
        parentId:0,
        level:1,
        id:1,
        createTime:'2022-09-02',
        children:[
            {
                menuName:'菜单1',
                menuType:'菜单',
                menuRouter:'/charts',
                identification:'menu1:view',
                parentId:1,
                level:2,
                id:10,
                createTime:'2022-09-02',
                children:[
                    {
                        menuName:'按钮1',
                        menuType:'按钮',
                        menuRouter:'/charts',
                        identification:'menu1:view:btn1',
                        parentId:10,
                        id:20,
                        level:3,
                        createTime:'2022-09-02',
                    },
                    {
                        menuName:'按钮2',
                        menuType:'按钮',
                        menuRouter:'/charts',
                        identification:'menu1:view:btn2',
                        parentId:10,
                        id:21,
                        level:3,
                        createTime:'2022-09-02',
                    },
                    {
                        menuName:'按钮3',
                        menuType:'按钮',
                        menuRouter:'/charts',
                        identification:'menu1:view:btn2',
                        parentId:10,
                        id:22,
                        level:3,
                        createTime:'2022-09-02',
                    }
                ]
            }
        ]
    },
    {
        menuName:'基础组件',
        menuType:'目录',
        menuRouter:'/components',
        identification:'menu:components',
        parentId:0,
        level:1,
        id:1,
        createTime:'2022-09-02',
        children:[
            {
                menuName:'菜单1',
                menuType:'菜单',
                menuRouter:'/components',
                identification:'menu1:view',
                parentId:1,
                level:2,
                id:10,
                createTime:'2022-09-02',
                children:[
                    {
                        menuName:'按钮1',
                        menuType:'按钮',
                        menuRouter:'/components',
                        identification:'menu1:view:btn1',
                        parentId:10,
                        id:20,
                        level:3,
                        createTime:'2022-09-02',
                    },
                    {
                        menuName:'按钮2',
                        menuType:'按钮',
                        menuRouter:'/components',
                        identification:'menu1:view:btn2',
                        parentId:10,
                        id:21,
                        level:3,
                        createTime:'2022-09-02',
                    },
                    {
                        menuName:'按钮3',
                        menuType:'按钮',
                        menuRouter:'/components',
                        identification:'menu1:view:btn2',
                        parentId:10,
                        id:22,
                        level:3,
                        createTime:'2022-09-02',
                    }
                ]
            }
        ]
    },
]

export const dictionaryData = [
    {
        "id": 1,
        "name": "性别",
        "keyCode":'sex',
        "createTime": "2011-02-25 18:37:39",
        "remark": "性别",
    },
    {
        "id": 2,
        "name": "证件类型",
        "keyCode":'idType',
        "createTime": "2011-02-25 18:37:39",
        "remark": "证件类型",
    }
]

export const dictionaryDetailData = [
    {
        "id": 1,
        "keyCode":'sex',
        "name": "性别",
        "createTime": "2011-02-25 18:37:39",
        "remark": "性别",
        "children":[
            {
                "id": 11,
                "name": "男",
                "key":1,
                "pid":1,
                "createTime": "2011-02-25 18:37:39",
                "remark": "男",
            },
            {
                "id": 12,
                "name": "女",
                "key":0,
                "pid":1,
                "createTime": "2011-02-25 18:37:39",
                "remark": "女",
            }
        ]
    },
    {
        "id": 2,
        "keyCode":'idType',
        "name": "证件类型",
        "createTime": "2011-02-25 18:37:39",
        "remark": "证件类型",
        "children":[
            {
                "id": 21,
                "name": "身份证",
                "key":1,
                "pid":2,
                "createTime": "2011-02-25 18:37:39",
                "remark": "身份证",
            },
            {
                "id": 22,
                "name": "社保卡",
                "key":2,
                "pid":2,
                "createTime": "2011-02-25 18:37:39",
                "remark": "社保卡",
            },
            {
                "id": 23,
                "name": "驾驶证",
                "key":3,
                "pid":2,
                "createTime": "2011-02-25 18:37:39",
                "remark": "驾驶证",
            },
            {
                "id": 24,
                "name": "护照",
                "key":4,
                "pid":2,
                "createTime": "2011-02-25 18:37:39",
                "remark": "护照",
            },
            {
                "id": 25,
                "name": "工作证",
                "key":5,
                "pid":2,
                "createTime": "2011-02-25 18:37:39",
                "remark": "工作证",
            }
        ]
    }
]
