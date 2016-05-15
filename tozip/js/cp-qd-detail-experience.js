$(function() {
	var $container = $(".div-exp-contain"),
		$liScroll = $(".li-scroll-i"),
		$spCell = $liScroll.eq(0).find(".sp-cell"),
		$spHead = $liScroll.eq(0).find(".sp-head"),
		$left = $container.find(".icon-toggle-left"),
		$right = $container.find(".icon-toggle-right"),
		$DHover = $(".d-hover");
	var defaultLength = 11,
		wCell = $spCell.outerWidth(),
		wHead = $spHead.width(),
		cCell = $spCell.length,
		cMax = cCell - defaultLength,
		index = 0;
	var hoverhandler;
	$left.addClass('hide');
	if (cMax <= 0) {
		$right.addClass('hide');
	} else {
		$liScroll.width(wHead + wCell * cCell);
	}
	$container.on("click", ".icon-toggle-left,.icon-toggle-right", function() {
		var tar = $(this);
		tar.hasClass('icon-toggle-left') && (function() {
			if (index > 0) {
				index--;
			}
			$right.removeClass('hide');
			index == 0 && $left.addClass('hide');
		}());
		tar.hasClass('icon-toggle-right') && (function() {
			if (index < cMax) {
				index++;
			}
			$left.removeClass('hide');
			index == cMax && $right.addClass('hide');
		}());
		$liScroll.parent().scrollLeft(index * wCell);
	}).on("hover", ".sp-cell", function(e) {
		var tar = $(this);
		hoverhandler && clearTimeout(hoverhandler);
		if (e.type == "mouseenter") {
			hoverhandler = setTimeout(function() {
				if (tar.text().replace(" ", "")) {
					renderHover(tar);
				}
			}, 500);
		} else {
			$DHover.addClass('hide');
		}

	});

	function renderHover($dom) {
		//获取参数，请求数据然后构建dom，例如：
		if ($dom.parent(".li-scroll-foot").length) {
			return;
		};
		var hDOM = $dom.parent();
		var type = hDOM.data("type"),
			idx = hDOM.index(),
			year = parseInt(hDOM.parent().data("syear")) + $dom.index() - 1;
		//ajax请求,模拟数据
		var emulateData = [{
			"time": "2015-05-14 12:30",
			"event": "M32190  深圳到济南",
		}, {
			"time": "2015-05-17 12:30",
			"event": "M8990  济南到深圳",
		}];
		var DOMStr = "<i class='i-arrow-1'></i><i class='i-arrow-2'></i>";
		for (var i = 0; i < emulateData.length; i++) {
			var tmp = emulateData[i];
			DOMStr += "<p class='p-h-row'><i class='icon-exp-" + idx + "'></i>" + tmp["time"] + "</p>";
			DOMStr += "<p class='p-h-row'><i class='icon-exp-7'></i>" + tmp["event"] + "</p>";
		}
		var pos = $dom.position();
		$DHover.html(DOMStr).removeClass('hide').css({
			left: pos.left + 45 + "px",
			top: pos.top + "px"
		});
	}
});