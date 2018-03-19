var commonJs = function() {
	/*监听标签尺寸变化*/
	$(function() {
		(function($, window, undefined) {
			var elems = $([]),
				jq_resize = $.resize = $.extend($.resize, {}),
				timeout_id,
				str_setTimeout = 'setTimeout',
				str_resize = 'resize',
				str_data = str_resize + '-special-event',
				str_delay = 'delay',
				str_throttle = 'throttleWindow';
			jq_resize[str_delay] = 250;
			jq_resize[str_throttle] = true;
			$.event.special[str_resize] = {
				setup: function() {
					if(!jq_resize[str_throttle] && this[str_setTimeout]) {
						return false;
					}
					var elem = $(this);
					elems = elems.add(elem);
					$.data(this, str_data, {
						w: elem.width(),
						h: elem.height()
					});
					if(elems.length === 1) {
						loopy();
					}
				},
				teardown: function() {
					if(!jq_resize[str_throttle] && this[str_setTimeout]) {
						return false;
					}
					var elem = $(this);
					elems = elems.not(elem);
					elem.removeData(str_data);
					if(!elems.length) {
						clearTimeout(timeout_id);
					}
				},
				add: function(handleObj) {
					if(!jq_resize[str_throttle] && this[str_setTimeout]) {
						return false;
					}
					var old_handler;

					function new_handler(e, w, h) {
						var elem = $(this),
							data = $.data(this, str_data);
						data.w = w !== undefined ? w : elem.width();
						data.h = h !== undefined ? h : elem.height();
						old_handler.apply(this, arguments);
					}
					if($.isFunction(handleObj)) {
						old_handler = handleObj;
						return new_handler;
					} else {
						old_handler = handleObj.handler;
						handleObj.handler = new_handler;
					}
				}
			};

			function loopy() {
				timeout_id = setTimeout(function() {
					elems.each(function() {
						var elem = $(this),
							width = elem.width(),
							height = elem.height(),
							data = $.data(this, str_data);
						if(width !== data.w || height !== data.h) {
							elem.trigger(str_resize, [data.w = width, data.h = height]);
						}
					});
					loopy();
				}, jq_resize[str_delay]);
			}
		})(jQuery, this);
		$(".user-page").bind("resize", function() {
			$(".account-userbar").height($(".user-page").innerHeight());
		});
	})
	/*//通用手机号码输入框失焦判定
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
	}*/
}

export default commonJs;