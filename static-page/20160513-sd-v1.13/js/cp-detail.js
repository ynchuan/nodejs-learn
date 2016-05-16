//ref:http://fedvic.com/2015/11/17/inputfile/uploadFile/
$(function() {
	var $mask = $(".mask"),
		$popup = $(".sec-popup"),
		$iptUpload = $(".ipt-upload"),
		$imgUpload = $(".img-upload"),
		$spPpUpload = $(".sp-pp-upload");
	$(".d-upload").click(function() {
		$popup.children().removeClass('check-upload');
		$mask.removeClass("hide");
		$popup.removeClass("hide");
		$iptUpload.parent().get(0).reset();
	});
	$popup.on("click", ".icon-close", function(e) {
		var tar = $(this);
		tar.hasClass("icon-close") && (function() {
			$mask.addClass('hide');
			$popup.addClass("hide");
		}());
	});
	$iptUpload.on("change", function(e) {
		$popup.children().addClass('check-upload');
		$imgUpload.attr("src", window.URL.createObjectURL($iptUpload[0].files[0]));
	});
	//开始上传---方式2,采用form(target)+iframe(id)进行不跳转页面上传模拟
	$("#uploaderFrame").load(function(){
		var response, responseStr = $(this).contents().text();
		try {
			response = JSON.parse(responseStr);
		} catch (e) {
			response = responseStr;
		}
		if(response){
			alert(response+" upload success!");
			$mask.addClass('hide');
			$popup.addClass("hide");
		}
	});
	//开始上传---方式1.html5方式
	$(".sp-pp-upload").click(function(){
		var data = new FormData();
		data.append('file',$iptUpload[0].files[0]);
		var xhr = new XMLHttpRequest();
		xhr.open('post', '/upload');
		xhr.onload = function(e) {
			alert(e.currentTarget.response);
			$mask.addClass('hide');
			$popup.addClass("hide");
		}
		xhr.send(data)
	});
});