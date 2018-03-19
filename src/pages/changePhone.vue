<template>
	<div class="">
		<div class="user-title">更换手机号</div>
		<ul class="changeProgress clearfix">
			<li class="active"><span>1</span>原手机验证</li>
			<li><span>2</span>新手机验证</li>
			<li><span>3</span>完成</li>
		</ul>
		<form action="" class="user-form" id="changePhoneNum_step1">
			<div class="field">
				<label for=""><span class="red">*</span>&nbsp;原手机号:</label>
				<input type="text" placeholder="请输入原手机号码" class="old_phoneNum" />
				<i class="icon icon-phoneNum"></i>
			</div>
			<div class="field">
				<label for=""><span class="red">*</span>&nbsp;验证码:</label>
				<input type="text" placeholder="请输入验证码" class="old_vCode short-input" />
				<i class="icon icon-yzm"></i>
				<input type="button" class="pure-button button-yzm" @click="getVcodeFun" value="获取验证码" />
			</div>
			<div class="field">
				<label for=""></label>
				<button type="button" class="pure-button button-sure" id="next_step1">下一步</button>
			</div>
		</form>
		<form action="" class="user-form" style="display: none;" id="changePhoneNum_step2">
			<div class="field">
				<label for=""><span class="red">*</span>&nbsp;新手机号:</label>
				<input type="text" placeholder="请输入新手机号码" class="new_phoneNum" />
				<i class="icon icon-phoneNum"></i>
			</div>
			<div class="field">
				<label for=""><span class="red">*</span>&nbsp;验证码:</label>
				<input type="text" placeholder="请输入验证码" class="new_vCode short-input" />
				<i class="icon icon-yzm"></i>
				<button type="button" class="pure-button button-yzm" @click="getVcodeFun">获取验证码</button>
			</div>
			<div class="field">
				<label for=""></label>
				<button type="button" class="pure-button button-sure" id="next_step2">下一步</button>
			</div>
		</form>
		<div class="changeSuccess" style="display: none;" id="changePhoneNum_step3">
			<i class="icon icon-success-b"></i> 恭喜您，手机号码修改完成，
			<span class="red">3</span>秒后跳转登录界面
		</div>
		<div class="user-text">
			<span class="red">*</span>&nbsp;如原手机号遗失，请联系网润金服工作人员及时更换手机号。
		</div>
	</div>
</template>

<script>
	import changePhoneNum from '../../static/assets/scripts/changePhoneNum';
	export default {
		data() {
			return {

			}
		},
		beforeUpdate: function() {

		},
		mounted: function() {
			changePhoneNum(this);
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