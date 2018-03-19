<template>
	<div class="">
		<div class="user-title">修改密码</div>
		<form action="" class="user-form">
			<div class="field">
				<label for=""><span class="red">*</span>&nbsp;用户名:</label>
				<span class="user-info">13867119389</span>
			</div>
			<div class="field">
				<label for=""><span class="red">*</span>&nbsp;原密码:</label>
				<input type="password" placeholder="请输入原密码" id="old_messagePass" />
				<i class="icon icon-pwd"></i>
			</div>
			<div class="field">
				<label for=""><span class="red">*</span>&nbsp;新密码:</label>
				<input type="password" placeholder="请输入新密码" id="new_messagePass" />
				<i class="icon icon-pwd"></i>
			</div>
			<div class="field">
				<label for=""><span class="red">*</span>&nbsp;验证码:</label>
				<input type="text" placeholder="请输入验证码" class="short-input" id="get_vCode" />
				<i class="icon icon-yzm"></i>
				<input type="button" class="pure-button button-yzm" @click="getVcodeFun" value="获取验证码" />
			</div>
			<div class="field">
				<label for=""></label>
				<button type="button" class="pure-button button-sure" id="changePassSub">确定</button>
			</div>
		</form>
	</div>
</template>

<script>
	import forgetPass from '../../static/assets/scripts/changePassword';
	export default {
		data() {
			return {

			}
		},
		beforeUpdate: function() {

		},
		mounted: function() {
			forgetPass(this);
		},
		methods: {
			getVcodeFun: function(e) {
				//发送验证码请求，请求成功则开始倒数
				var el = e.target;
				$(el).addClass("bgGray");
				var num = 60;
				var timer;
				timer = setInterval(function() {
					if(num > 1) {
						num--;
						$(el).val(num + "秒后重新获取");
						$(el).attr("disabled", true);
					} else {
						$(el).removeClass("bgGray");
						$(el).val("获取验证码");
						$(el).attr("disabled", false);
						clearInterval(timer);
					}
				}, 1000);
			}
		},
		watch: {

		}
	}
</script>
<style>

</style>