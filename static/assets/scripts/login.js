/*
 * 登录页判定 
 */
//loginJudge()

var login = function loginJudge() {
	$(".wrongWords").hide();
	//非空判定
	var getInput = $(".loginDiv_1 input");
	getInput.bind('input propertychange blur', function() {
		var x = 0;
		//为空则提示错误信息
		if(!$(this).val()) {
			$(this).addClass("inputWrong");
			$(".loginDiv .wrongWords span").html($(this).attr("placeholder") + "不能为空");
			$(".loginDiv .wrongWords").show();
		} else {
			$(this).removeClass("inputWrong");
			$(".loginDiv .wrongWords").hide();
		}
		getInput.each(function(i, obj) {
			if($(obj).val() == "") {
				x++;
			}
		});
		console.log(x)
		//全部不为空时登录按钮可点击
		if(x == 0) {
			$(".sureLogin").addClass("canClick");
			$(".sureLogin").attr("disabled", false);
		} else {
			$(".sureLogin").removeClass("canClick");
			$(".sureLogin").attr("disabled", true);
		}
	});
	getInput.focus(function() {
		$(this).removeClass("inputWrong");
	});
}

export default login;