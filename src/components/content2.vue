<template>
	<div class="account-wrap body_content content">
		<div class="w1200 clearfix body_content_applyList">
			<div class="account-userbar">
				<div class="apply-bg"></div>
				<ul>
					<li :class="activeNum == 0?'active':''" @click="addActive(0)">
						<router-link to="/userOperation/yj"><i class="icon icon-yj"></i>我的业绩</router-link>
					</li>
					<li :class="activeNum == 1?'active':''" @click="addActive(1)">
						<router-link to="/userOperation/changePwd"><i class="icon icon-changePwd"></i>修改密码</router-link>
					</li>
					<li :class="activeNum == 2?'active':''" @click="addActive(2)">
						<router-link to="/userOperation/changePhone"><i class="icon icon-changePhone"></i>更换手机号</router-link>
					</li>
					<li id="logout" :class="activeNum == 3?'active logout':'logout'" @click="addActive(3)">
						<router-link to=""><i class="icon icon-logout"></i>退出登录</router-link>
					</li>
				</ul>
			</div>
			<div class="user-page bz-bb rightContent ">
				<router-view></router-view>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import commonJs from '../../static/js/common/common';
	import alertBox from '../../static/js/alertBox';
	export default {
		name: 'header',
		data() {
			return {
				activeNum: this.navActiveNum
			}
		},
		mounted: function() {
			commonJs();
			alertBox();
			switch(this.$route.name) {
				case "yj":
					this.activeNum = 0;
					break;
				case "changePwd":
					this.activeNum = 1;
					break;
				case "changePhone":
					this.activeNum = 2;
					break;
				default:
					break;
			}
		},
		methods: {
			addActive: function(num) {
				this.activeNum = num;
				this.$emit("listenToChileEvent2",this.activeNum);
			},
			changeActiveNum : function(){
				this.activeNum = this.navActiveNum;
			}
		},
		watch : {
			"navActiveNum" : "changeActiveNum"
		},
		props : ['navActiveNum']
	}
</script>
<style scoped>
	@import '/static/css/style.css';
</style>