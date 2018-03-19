/*
 * 修改密码
 */
var changePassword = function() {
	var oldPass, newPass, vCode;

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

	//原密码判定
	$("#old_messagePass").bind('input propertychange blur', function() {
		var getPassNum = passwordNum($(this));
		if(getPassNum) {
			var setDom = "<p class='wrongMessage'><i class='icon icon-cha'></i>" + getPassNum + "</p>";
			$(this).nextAll(".wrongMessage").remove();
			$(this).after(setDom);
			oldPass = false;
		} else {
			$(this).nextAll(".wrongMessage").remove();
			oldPass = true;
		}
		subBtnDisabled();
	});

	//新密码判定
	$("#new_messagePass").bind('input propertychange blur', function() {
		var getPassNum = passwordNum($(this));
		if(getPassNum) {
			var setDom = "<p class='wrongMessage'><i class='icon icon-cha'></i>" + getPassNum + "</p>";
			$(this).nextAll(".wrongMessage").remove();
			$(this).after(setDom);
			newPass = false;
		} else {
			$(this).nextAll(".wrongMessage").remove();
			newPass = true;
		}
		subBtnDisabled();
	});

	//验证码非空判定
	$("#get_vCode").bind('input propertychange blur', function() {
		var getStr = empty($(this));
		if(!getStr) {
			vCode = false;
			var setDom = "<p class='wrongMessage'><i class='icon icon-cha'></i>请输入验证码</p>";
			$(this).nextAll(".wrongMessage").remove();
			$(this).parent().append(setDom);
		} else {
			vCode = true;
			$(this).nextAll(".wrongMessage").remove();
		}
		subBtnDisabled();
	});

	//判断输入格式是否正确，改变下一步按钮可点击状态
	function subBtnDisabled() {
		if(oldPass && newPass && vCode) {
			$("#changePassSub").addClass("canClick");
			$("#changePassSub").attr("disabled", false);
		} else {
			$("#changePassSub").removeClass("canClick");
			$("#changePassSub").attr("disabled", true);
		}
	}

	//输入完成点击提交按钮,提交表单
	$("#changePassSub").click(function() {
		//调用相关接口

	});

}
export default changePassword;