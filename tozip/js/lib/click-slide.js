;
/**
 * 页面效果添加
 * 
 */
$(function() {
	$("[data-srcoll-horizontal]").each(function(idx, el) {
		var $ele = $(el),
			offsetL = 3;
		var index = 0,
			tarDOM = $ele.children("ul"),
			childDOM = tarDOM.children(),
			arrowDOMs = $ele.children(".icon-page");
		var winWidth = tarDOM.width(), //3为滚动窗口修正值
			contWidth = childDOM.width() * childDOM.length,
			count = Math.floor(contWidth / (winWidth + offsetL)); //表示后面滚动组的索引值
		arrowDOMs.eq(0).hide();
		if (count <= 0) {
			arrowDOMs.eq(1).hide();
		} else {
			/**
			 * 需要左右滚动 添加事件
			 * 
			 */
			$ele.on("click", ".icon-page", function() {
				var tar = $(this),
					isleft = !!tar.nextAll(".icon-page").length;
				isleft ? index-- : index++;
				if (index <= 0) {
					index = 0;
					arrowDOMs.eq(0).hide();
					arrowDOMs.eq(1).show();
				} else if (index >= count) {
					index = count;
					arrowDOMs.eq(1).hide();
					arrowDOMs.eq(0).show();
				} else {
					arrowDOMs.show();
				}
				tarDOM.scrollLeft(index * winWidth);
			});
		}
	});
});