<template>
	<div class="account-wrap body_content content">
		<div class="w1200 clearfix body_content_applyList">
			<div class="apply_list_add">
				<a href="javascript:;" class="apply_btn" @click="showApplyLList1()">
					<p><i class="icon-add"></i>申请列表</p>
				</a>
				<a href="javascript:;" class="add_btn" @click="showApplyLList2()">
					<p><i class="icon-apply"></i>新增申请</p>
				</a>
			</div>
			<div class="clearfix">
				<div class="account-userbar apply-userbar clearfix">
					<div class="apply-bg"></div>
					<ul>
						<li :class="activeNum == 0?'active':''" @click="addActive(0)">
							<router-link to="/userCenter/borrower"><i class="icon icon-jkrxx"></i>借款人信息</router-link>
						</li>
						<li :class="activeNum == 1?'active':''" @click="addActive(1)">
							<router-link to="/userCenter/borrow"><i class="icon icon-jkxx"></i>借款信息</router-link>
						</li>
						<li :class="activeNum == 2?'active':''" @click="addActive(2)">
							<router-link to="/userCenter/enterprise"><i class="icon icon-qyxx"></i>企业信息</router-link>
						</li>
						<li :class="activeNum == 3?'active':''" @click="addActive(3)">
							<router-link to="/userCenter/credit" class="userbar-menu clearfix"><i class="icon icon-jkrzc"></i><span class="menu-msg">借款人资产和信用信息</span></router-link>
						</li>
						<li :class="activeNum == 4?'active':''" @click="addActive(4)">
							<router-link to="/userCenter/enclosure"><i class="icon icon-fj"></i>附件</router-link>
						</li>
					</ul>
				</div>
				<div class="user-page bz-bb rightContent ">
					<router-view :editListShow1="listShow1" :editListShow2="listShow2"></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import divselect from '../../static/js/select';
	import commonJs from '../../static/js/common/common';
	export default {
		name: 'header',
		data() {
			return {
				activeNum: 0,
				listShow1: true,
				listShow2: false
			}
		},
		mounted: function() {
			commonJs();
			switch(this.$route.name) {
				case "borrower":
					this.activeNum = 0;
					break;
				case "borrow":
					this.activeNum = 1;
					break;
				case "enterprise":
					this.activeNum = 2;
					break;
				case "credit":
					this.activeNum = 3;
					break;
				case "enclosure":
					this.activeNum = 4;
					break;
				default:
					break;
			}
		},
		methods: {
			addActive: function(num) {
				this.activeNum = num;
			},
			showApplyLList1: function() {
				this.listShow1 = true;
				this.listShow2 = false;
			},
			showApplyLList2: function() {
				this.listShow2 = true;
				this.listShow1 = false;
			}
		}
	}
</script>
<style scoped>
	@import '/static/css/style.css';
</style>