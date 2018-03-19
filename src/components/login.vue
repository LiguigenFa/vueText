<template>
	<div>
		<header1></header1>
		<div class="login_content bz-bb">
			<div class="login_content_1">
				<div class="loginDiv bz-bb">
					<p class="loginWord">帐号登录</p>
					<form action="" method="post">
						<div class="loginDiv_1">
							<i class="loginDiv_i1"></i>
							<input type="text" name="" id="" value="" placeholder="用户名" v-model='username' />
						</div>
						<div class="loginDiv_1">
							<i class="loginDiv_i2"></i>
							<input type="password" name="" id="" value="" placeholder="密码" v-model='password' />
						</div>
						<div class="loginDiv_1">
							<i class="loginDiv_i3"></i>
							<input type="text" name="" id="" value="" class="login_vCode" placeholder="验证码" />
							<img src="" class="frt login_vCodeImg" />
						</div>
						<input type="button" value="确认登录" class="login_vCodeImg sureLogin" @click="btn_click()" />
					</form>
					<p class="wrongWords">
						<i class="icon icon-wrong"></i>
						<span id=""></span>
					</p>
					<router-link to="/forgetPassword" class="goForgetPass">忘记密码？</router-link>
				</div>
			</div>
		</div>
		<footer1></footer1>
	</div>
</template>

<script>
	import header1 from './header';
	import footer1 from './footer';
	import login from '../../static/assets/scripts/login';
	export default {

		data: function() {
			return {
				username: '',
				password: '',
				message: '',
				getjson: {
					username: 'liguigen',
					password: '123'
				}
			}
		},
		mounted: function() {
			login()
		},
		methods: {
			btn_click: function() {
				//登录按钮可点击，发送请求
				//在这里发送请求
				//请求失败提示用户名或密码错误
				$(".loginDiv .wrongWords span").html("用户名或密码错误");
				$(".loginDiv .wrongWords").show();
				if(this.username == '') {
					this.message = '请输入用户名！'
					return false
				}
				if(this.password == '') {
					this.message = '请输入密码！'
					return false
				}
				if(this.username == this.getjson.username && this.password == this.getjson.password) {
					this.$router.push({ path: '/index' })
				} else {
					this.message = '你的密码错误!'
					return false
				}
			}
		},
		components: {
			header1,
			footer1
		}
	}
</script>

<style scoped>
	@import '/static/css/style.css';
</style>
<style>

</style>