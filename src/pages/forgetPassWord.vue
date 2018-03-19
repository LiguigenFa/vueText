<template>
	<div id="">
		<header1></header1>
		<div class="body_content">
			<div class="body_content_findPass">
				<p class="body_content_p">
					密码找回
				</p>
				<ul class="forgetPass_ul">
					<li class="active">第一步：手机验证</li>
					<li class="">第二步：设置新密码</li>
					<li class="">第三步：完成</li>
				</ul>

				<!--忘记密码第一步-->
				<div class="body_content_input phoneNum body_content_input1" style="display: ;" id="findPass_step1">
					<form action="" method="post" id="changePass_step1">
						<div class="inputNum">
							<label for="" class="body_content_input_label1">
								<span id="">*</span>
								<span class="word">手机号：</span>
							</label>
							<i class="flt i1 icon-phone"></i>
							<input type="text" name="" value="" placeholder="请输入手机号" id="changePass_step1_phoneNum" />
						</div>
						<div class="inputNum">
							<label for="" class="body_content_input_label1">
								<span id="">*</span>
								<span class="word">验证码：</span>
							</label>
							<i class="flt i2 icon-key"></i>
							<input type="text" class="inputNum_vCode" name="" id="" value="" placeholder="请输入验证码" />
							<input type="button" class="inputNum_getVcode" @click="getVcodeFun" value="获取验证码">
						</div>
						<input type="button" value="下一步" class="forgetPass_sub1" id="forgetPass_sub1" />
					</form>
				</div>

				<!--忘记密码第二步-->
				<div class="body_content_input phoneNum" style="display: none;" id="findPass_step2">
					<form action="" method="post" id="changePass_step2">
						<div class="inputNum">
							<label for="" class="body_content_input_label2">
								<span id="">*</span>
								<span class="word">新密码：</span>
							</label>
							<i class="flt i3 icon-password"></i>
							<input type="password" name="" id="" class="changePassInput" value="" placeholder="请输入密码" />
						</div>
						<div class="inputNum">
							<label for="" class="body_content_input_label2">
								<span id="">*</span>
								<span class="word">确认密码：</span>
							</label>
							<i class="flt i3 icon-password"></i>
							<input type="password" name="" id="" class="changePassInput" value="" placeholder="请再次输入密码" />
						</div>
						<input type="button" value="下一步" class="forgetPass_sub1" id="forgetPass_sub2" />
					</form>
				</div>

				<!--忘记密码第三步-->
				<div class="changePassSuccess" style="display: none;" id="findPass_step3">
					<i></i>
					<p class="frt">恭喜您，密码修改完成，<span>3秒后</span>跳转登录页面</p>
				</div>
			</div>
		</div>
		<footer1></footer1>
	</div>

</template>

<script>
	import commonJs from '../../static/js/common/common';
	import forgetPass from '../../static/assets/scripts/forgetPassword';
	import header1 from '../components/header';
	import footer1 from '../components/footer';
	export default {
		data() {
			return {}
		},
		mounted: function() {
			var that = this;
			commonJs();
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
		components: {
			header1,
			footer1
		}
	}
</script>
<style scoped>
	@import '/static/css/style.css';
</style>