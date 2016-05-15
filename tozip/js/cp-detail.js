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
	});
	$popup.on("click", ".icon-close", function(e) {
		var tar = $(this);
		tar.hasClass("icon-close") && (function() {
			$mask.addClass('hide');
			$popup.addClass("hide");
		}());
	})
	$iptUpload.on("change", function(e) {
		$popup.children().addClass('check-upload');
		$imgUpload.attr("src", window.URL.createObjectURL($iptUpload[0].files[0]));
	})
});