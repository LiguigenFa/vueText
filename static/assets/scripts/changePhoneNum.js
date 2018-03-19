/*
 * 修改手机号验证
 */
var changePhoneNum = function changePhoneNum(liguigen) {
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
	//通用非空判定
	function empty(obj) {
		if(!obj.val()) {
			return false;
		} else {
			return true;
		}
	}
	var btnClick = {
		/*
		 * 修改手机号第一步
		 */
		btn1: function(obj) {
			var that = this;
			$("#next_step1").attr("disabled", true);
			var getPhoneNum = $(obj).find(".old_phoneNum");
			var getVcode = $(obj).find(".old_vCode");
			var a, b;
			//原手机号码判定
			getPhoneNum.bind('input propertychange blur', function() {
				var getStr = phoneNum(getPhoneNum);
				if(getStr) {
					a = false;
					var setDom = "<p class='wrongMessage'><i class='icon icon-cha'></i>" + getStr + "</p>";
					$(this).nextAll(".wrongMessage").remove();
					$(this).after(setDom);
				} else {
					a = true;
					$(this).nextAll(".wrongMessage").remove();
				}
				step1();
			});
			//验证码非空判定
			getVcode.bind('input propertychange blur', function() {
				var getStr = empty(getVcode);
				if(!getStr) {
					b = false;
					var setDom = "<p class='wrongMessage'><i class='icon icon-cha'></i>请输入验证码</p>";
					$(this).nextAll(".wrongMessage").remove();
					$(this).parent().append(setDom);
				} else {
					b = true;
					$(this).nextAll(".wrongMessage").remove();
				}
				step1();
			});

			//判断输入格式是否正确，改变下一步按钮可点击状态
			function step1() {
				if(a && b) {
					$("#next_step1").addClass("canClick");
					$("#next_step1").attr("disabled", false);
				} else {
					$("#next_step1").removeClass("canClick");
					$("#next_step1").attr("disabled", true);
				}
			}

			//输入完成下一步可点击
			$("#next_step1").click(function() {
				$("#changePhoneNum_step1").hide();
				$("#changePhoneNum_step2").show();
				//调用相关接口判断用户是否存在，判断验证码是否正确，验证通过则进入下一步
				that.btn2($("#changePhoneNum_step2"));
			});
		},
		/*
		 * 修改手机号第二步
		 */
		btn2: function(obj1) {
			var that = this;
			$(".changeProgress li").removeClass("active");
			$($(".changeProgress li")[1]).addClass("active");
			$("#next_step2").attr("disabled", true);
			var getPhoneNum = $(obj1).find(".new_phoneNum");
			var getVcode = $(obj1).find(".new_vCode");
			var a, b;
			//原手机号码判定
			getPhoneNum.bind('input propertychange blur', function() {
				var getStr = phoneNum(getPhoneNum);
				if(getStr) {
					a = false;
					var setDom = "<p class='wrongMessage'><i class='icon icon-cha'></i>" + getStr + "</p>";
					$(this).nextAll(".wrongMessage").remove();
					$(this).after(setDom);
				} else {
					a = true;
					$(this).nextAll(".wrongMessage").remove();
				}
				step1();
			});
			//验证码非空判定
			getVcode.bind('input propertychange blur', function() {
				var getStr = empty(getVcode);
				if(!getStr) {
					b = false;
					var setDom = "<p class='wrongMessage'><i class='icon icon-cha'></i>请输入验证码</p>";
					$(this).nextAll(".wrongMessage").remove();
					$(this).parent().append(setDom);
				} else {
					b = true;
					$(this).nextAll(".wrongMessage").remove();
				}
				step1();
			});

			//判断输入格式是否正确，改变下一步按钮可点击状态
			function step1() {
				if(a && b) {
					$("#next_step2").addClass("canClick");
					$("#next_step2").attr("disabled", false);
				} else {
					$("#next_step2").removeClass("canClick");
					$("#next_step2").attr("disabled", true);
				}
			}

			//输入完成下一步可点击
			$("#next_step2").click(function() {
				$("#changePhoneNum_step2").hide();
				$("#changePhoneNum_step3").show();
				//调用相关接口判断用户是否存在，判断验证码是否正确，验证通过则进入下一步
				that.changeNumSuccess();
			});
		},
		/*
		 * 修改手机号第三步
		 */
		changeNumSuccess: function() {
			console.log("change phone number success");
			$(".changeProgress li").removeClass("active");
			$($(".changeProgress li")[2]).addClass("active");
			var num = 4;
			var timer;
			timer = setInterval(function() {
				if(num > 1) {
					num--;
					$("#changePhoneNum_step3 .red").html(num);
				} else {
					clearInterval(timer);
					liguigen.$router.push({ path: '/' });
				}
			}, 1000);
		}
	}
	btnClick.btn1($("#changePhoneNum_step1"));
}

export default changePhoneNum;