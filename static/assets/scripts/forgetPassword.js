/*
 * 忘记密码输入判定
 */
var forgetPass = function forgetPass(liguigen){
	var btnClick = {
		/*
		 * 修改密码第一步
		*/
		btn1 : function(obj){
			var that = this;
			$("#forgetPass_sub1").attr("disabled",true);
			var getPhoneNum = $(obj).find("#changePass_step1_phoneNum");
			var getVcode = $(obj).find(".inputNum_vCode");
			var a,b;
			//手机号码判定
			getPhoneNum.bind('input propertychange blur', function(){
				var getStr = phoneNum(getPhoneNum);
				if(getStr){
					a = false;
					var setDom = "<p class='wrongMessage'><i class='icon icon-cha'></i>" + getStr + "</p>";
					$(this).nextAll(".wrongMessage").remove();
					$(this).after(setDom);
				} else{
					a = true;
					$(this).nextAll(".wrongMessage").remove();
				}
				step1();
			});
			//验证码非空判定
			getVcode.bind('input propertychange blur', function(){
				var getStr = empty(getVcode);
				if(!getStr){
					b = false;
					var setDom = "<p class='wrongMessage'><i class='icon icon-cha'></i>请输入验证码</p>";
					$(this).nextAll(".wrongMessage").remove();
					$(this).parent().append(setDom);
				} else{
					b = true;
					$(this).nextAll(".wrongMessage").remove();
				}
				step1();
			});
			
			//输入完成下一步可点击
			$("#forgetPass_sub1").click(function(){
				$("#findPass_step1").hide();
				$("#findPass_step2").show();
				
				//调用相关接口判断用户是否存在，判断验证码是否正确，验证通过则进入下一步
					that.btn2();
			});
			
			//判断输入格式是否正确，改变下一步按钮可点击状态
			function step1(){
				if(a && b){
					$("#forgetPass_sub1").addClass("canClick");
					$("#forgetPass_sub1").attr("disabled",false);
				} else{
					$("#forgetPass_sub1").removeClass("canClick");
					$("#forgetPass_sub1").attr("disabled",true);
				}
			}
		},
		/*
		 * 修改密码第二步
		*/
		btn2 : function(){
			var that = this;
			$("#forgetPass_sub1").attr("disabled",true);
			$(".forgetPass_ul li").removeClass("active");
			$($(".forgetPass_ul li")[1]).addClass("active");
			var changePass = $("#changePass_step2 .changePassInput");
			var pass1,pass2;
			//首次输入密码判定
			$(changePass[0]).bind('input propertychange blur', function(){
				var getPassNum = passwordNum($(changePass[0]));
				if(getPassNum){
					var setDom = "<p class='wrongMessage'><i class='icon icon-cha'></i>" + getPassNum + "</p>";
					$(changePass[0]).nextAll(".wrongMessage").remove();
					$(changePass[0]).after(setDom);
					pass1 = false;
				} else{
					$(changePass[0]).nextAll(".wrongMessage").remove();
					pass1 = true;
				}
				step2();
			});
			//再次输入密码判定
			$(changePass[1]).bind('input propertychange blur', function(){
				if($(changePass[1]).val() != $(changePass[0]).val()){
					var setDom = "<p class='wrongMessage'><i class='icon icon-cha'></i>两次输入的密码必须相同</p>";
					$(changePass[1]).nextAll(".wrongMessage").remove();
					$(changePass[1]).after(setDom);
					pass2 = false;
				} else{
					$(changePass[1]).nextAll(".wrongMessage").remove();
					pass2 = true;
				}
				step2();
			});
			//输入完成下一步可点击
			$("#forgetPass_sub2").click(function(){
				$("#findPass_step2").hide();
				$("#findPass_step3").show();
				//调用相关接口,成功请求则进入第三步
					that.changePassSuccess();
			});
			//判断两次输入的密码是否符合要求，改变下一步按钮可点击状态
			function step2(){
				if(pass1 && pass2){
					$("#forgetPass_sub2").addClass("canClick");
					$("#forgetPass_sub2").attr("disabled",false);
				} else{
					$("#forgetPass_sub2").removeClass("canClick");
					$("#forgetPass_sub2").attr("disabled",true);
				}
			}
		},
		/*
		 * 修改密码成功
		*/
		changePassSuccess : function(){
			console.log("change password success");
			$(".forgetPass_ul li").removeClass("active");
			$($(".forgetPass_ul li")[2]).addClass("active");
			var num = 4;
			var timer;
			timer = setInterval(function(){
				if(num>1){
					num--;
					$(".changePassSuccess span").html(num + "秒后");
				} else{
					clearInterval(timer);
					liguigen.$router.push({ path: '/' });
				}
			},1000);
		}
	}
	btnClick.btn1($("#changePass_step1"));
	
	//通用手机号码输入框失焦判定
	function phoneNum(obj) {
		var str = "";
		var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/i;
		if(obj.val() == "") {
			str = "请填写电话号码";
		} else if(obj.val().length < 11 || !reg.test(obj.val())) {
			str = "请输入正确的手机号码";
		} else {
			obj.removeClass("wrong");
		}
		if(str) {
			return str;
		} else {
			return false;
		}
	}
	//通用密码输入框失焦判定
	function passwordNum(obj) {
		var str = "";
		var reg2 = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
		if(obj.val() == "") {
			str = "请填写密码";
		} else if(!reg2.test(obj.val())) {
			str = "请输入6~12位的数字、字母";
		}
		if(str != "") {
			return str;
		} else {
			return false;
		}
	}
	//通用非空判定
	function empty(obj) {
		if(!obj.val()) {
			return false;
		} else {
			return true;
		}
	}
	//获取验证码单击
	function getVcodeFun(obj) {
		//发送验证码请求，请求成功则开始倒数

		$(obj).addClass("bgGray");
		var num = 60;
		var timer;
		timer = setInterval(function() {
			if(num > 1) {
				num--;
				$(obj).val(num + "秒后重新获取");
				$(obj).attr("disabled", true);
			} else {
				$(obj).removeClass("bgGray");
				$(obj).val("获取验证码");
				$(obj).attr("disabled", false);
				clearInterval(timer);
			}
		}, 1000);
	}
}

export default forgetPass;