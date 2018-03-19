var divselect = function(obj) {
	var findCite = obj.find(".choiceSelect");
	var findUl = obj.find(".div-loan-time_ul");
	var findInput = obj.next();
	findCite.click(function(event) {
		var e = event || window.event;
		var ul = $(this).next();
		ul.slideToggle("fast");
		$(this).toggleClass("borderRed");
		e.stopPropagation();
		$(document).click(function() {
			$(".div-loan-time_ul").hide();
			$(".choiceSelect").removeClass("borderRed");
		});
	});
	findUl.find("a").click(function() {
		var value = $(this).attr("selectid");
		var ul = $(this).parents(".div-loan-time_ul");
		var hideInput = $(this).parents(".common-select").next();
		var txt = $(this).text();
		ul.hide();
		ul.prev().html(txt);
		hideInput.val(value);
		$(this).parents(".common-select").find(".choiceSelect").removeClass("borderRed");
	});
};

export default divselect;