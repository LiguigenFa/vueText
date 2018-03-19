/*
 * 点击"选择文件"
 */
var lookImg = function() {
	
	$(".choiceLocalImg").change(function() {
		var that = this;
		var r = new FileReader();
		var f = $(this)[0].files[0];
		var filesize = Math.floor((f.size) / 1024) + "KB";
		r.readAsDataURL(f);
		r.onload = function(e) {
			$(that).parent().parent().find(".getLocalImg").attr("src", this.result).show();
			$(that).parent().parent().find(".getLocalImg").attr("index", this.result);
			//获取图片信息
			var imgMessage = [];
			imgMessage.push(f.name, filesize);
			showimgMessage(imgMessage, $(that).parent().siblings().find(".fileTabel"));
		};
		$(this).val("");
	});

	/*
	 * 拖拽图片上传
	 */
	clickOrDrag();

	function clickOrDrag() {
		$(document).on({
			dragleave: function(e) { //拖离 
				e.preventDefault();
			},
			drop: function(e) { //拖后放 
				e.preventDefault();
			},
			dragenter: function(e) { //拖进 
				e.preventDefault();
			},
			dragover: function(e) { //拖来拖去 
				e.preventDefault();
			}
		});
		var box = document.getElementsByClassName('dragSub'); //拖拽目标区域 
		for(var l = 0; l < box.length; l++) {
			box[l].addEventListener("drop", function(e) {
				e.preventDefault(); //取消默认浏览器拖拽效果 
				var fileList = e.dataTransfer.files; //获取文件对象 
				//检测是否是拖拽文件到页面的操作 
				if(fileList.length == 0) {
					return false;
				}
				//检测文件是不是图片 
				if(fileList[0].type.indexOf('image') === -1) {
					alert("您拖的不是图片！");
					return false;
				}

				//拖拉图片到浏览器，可以实现预览功能 
				var img = window.URL.createObjectURL(fileList[0]);
				var filename = fileList[0].name; //图片名称 
				var filesize = Math.floor((fileList[0].size) / 1024) + "KB";
				/*if(filesize > 500) {
					alert("上传大小不能超过500K.");
					return false;
				}*/
				$(this).find(".getLocalImg").attr("src", img).show();
				$(this).find(".getLocalImg").attr("index", img);

				//获取图片信息
				var imgMessage = [];
				imgMessage.push(filename, filesize);
				showimgMessage(imgMessage, $(this).siblings().find(".fileTabel"));

				//上传 
				/*    xhr = new XMLHttpRequest(); 
				    xhr.open("post", "upload.php", true); 
				    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); 
				     
				    var fd = new FormData(); 
				    fd.append('mypic', fileList[0]); 
				         
				    xhr.send(fd); */
			}, false);
		}
	}

	/*
	 * 向表格赋值
	 */
	function showimgMessage(arr, obj) {
		var exTr = obj.find(".exampleTr");
		exTr.hide();
		var html = '<tr class="addTr"><td>' + arr[0] + '</td><td>' + arr[1] + '</td><td class="subState">未上传</td><td><a href="javascript:;" class="fileTabel_btn sub">上传</a><a href="javascript:;" class="fileTabel_btn delete">删除</a></td></tr>';
		obj.append(html);
	}

	/*
	 * 表格中删除按钮
	 */
	$("tbody").click(function(event) {
		var e = event || window.event;
		var target = e.target || e.srcElement;
		if(target.innerHTML == '删除') {
			if($(target).parents("tbody").find(".addTr").length == 1) {
				$(target).parents("tbody").find(".exampleTr").show();
			}
			$(target).parents(".addTr").remove();
		}
	})
	/*
	 * 表格中上传按钮，点击上传单张图片
	 */
	$("tbody").click(function(event) {
		var e = event || window.event;
		var target = e.target || e.srcElement;
		if($(target).parents(".addTr").length != 0 && target.innerHTML == '上传') {
			$(target).parent().prev().html("正在上传");
			//此处调用上传接口，若上传成功则改变上传状态
			// $(target).parent().prev().html("上传完成");
		}
	})

	/*
	 * 点击全部删除按钮
	 */
	$(".deleteAll").click(function() {
		$(this).parent().prev().find(".addTr").remove();
		$(this).parent().prev().find(".exampleTr").show();
	});

	/*
	 * 点击全部上传按钮
	 */
	$(".subAll").click(function() {
		$(this).parent().prev().find(".subState").html("正在上传");
		//此处调用上传接口，若上传成功则改变上传状态
		// $(this).parent().prev().find(".subState").html("上传完成");
	})
}

export default lookImg;