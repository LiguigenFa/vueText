// 2017年8月25日  栗桂根 create

import Vue from 'vue';
import VueRouter from 'vue-router';
import $ from 'jquery';
import login from './components/login';
import index from './components/index';
import layout from './components/layout';
import forgetPassword from './pages/forgetPassWord';
import applyList from './pages/applyList';
import userCenter from './components/userCenter';
import userOperation from './components/userOperation';
import enclosure from './pages/enclosure';
import borrow from './pages/borrow';
import borrower from './pages/borrower';
import credit from './pages/credit';
import enterprise from './pages/enterprise';
import yj from './pages/yj';
import changePwd from './pages/changePwd';
import changePhone from './pages/changePhone';
const enclosure1 = { template: enclosure };
const borrow1 = { template: borrow };
const borrower1 = { template: borrower };
const credit1 = { template: credit };
const enterprise1 = { template: enterprise };
const yj1 = { template: yj };
const changePwd1 = { template: changePwd };
const changePhone1 = { template: changePhone };
Vue.use(VueRouter)
//Vue.use(VueResource)
let router = new VueRouter({
	mode: 'history',
	routes: [{
			path: '/',
			component: login
		},
		{
			path: '/index',
			component: index,
			children: [{
					name: 'applyList',
					path: '/applyList',
					component: applyList
				},
				{
					name: 'userOperation',
					path: '/userOperation/yj',
					component: userOperation,
					children: [{
							name: 'yj',
							path: '/userOperation/yj',
							component: yj
						},{
							name: 'changePwd',
							path: '/userOperation/changePwd',
							component: changePwd
						},{
							name: 'changePhone',
							path: '/userOperation/changePhone',
							component: changePhone
						}
					]
				},
				{
					name: 'userCenter',
					path: '/userCenter/enclosure',
					component: userCenter,
					children: [{
							name: 'enclosure',
							path: '/userCenter/enclosure',
							component: enclosure
						},
						{
							name: "borrow",
							path: '/userCenter/borrow',
							component: borrow
						},
						{
							name: "borrower",
							path: '/userCenter/borrower',
							component: borrower
						},
						{
							name: "credit",
							path: '/userCenter/credit',
							component: credit
						},
						{
							name: "enterprise",
							path: '/userCenter/enterprise',
							component: enterprise
						}
					]
				}
			]
		},
		{
			name: "forgetPassword",
			path: '/forgetPassword',
			component: forgetPassword
		}
	]
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<layout/>',
	components: { layout }
})