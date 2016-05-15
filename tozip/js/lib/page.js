/**
 * 仿百度搜索的分页模式
 * @param {[type]} option [description]
 */

(function() {
	var page;

	function Page(option) {
		this.index = option.index || 1,
			this.size = option.size || 10,
			this.length = option.length || 10, //最多显示页数
			this.pagecontainer = option.container || document,
			this.callback = option.callback;
	}

	Page.prototype.render = function() {
		var domstr = "<div class='page'>",
			start = this.startindex,
			end = this.endindex;
		if (start > 1) {
			domstr += "<a class='page-index page-first'>首页</a><a class='page-index page-up'>上一页</a>";
		}
		while (start <= end) {
			var cls = "";
			start === this.index ? cls = "cur-index" : cls = "";
			domstr += "<a class='page-index " + cls + "'>" + start + "</a>";
			++start;
		}
		if (end < this.totle) {
			domstr += "<a class='page-index page-down'>下一页</a><a class='page-index page-end'>尾页</a>";
		}
		domstr += "</div><span class='sp-total'>共计<strong class='str-total'>" + this.total + "</strong>条</span><span class='sp-current'>当前第<input type='text' class='ipt-curr' value='" + this.index + "'>页/共<strong class='str-pages'>" + this.totle + "</strong>页</span>";
		this.pagecontainer.html(domstr);
	}
	Page.prototype.init = function(opt) {
		this.total = opt.total; //数据总条数
		this.startindex = 1;
		this.totle = Math.ceil(this.total / this.length); //数据总页数
		this.endindex = this.size > this.totle ? this.totle : this.size;
		this.render();
		this.addListener();
	}
	Page.prototype.addListener = function() {
		var _this = this;
		this.pagecontainer.off("click", ".page-index", clickDeal).off("keypress", ".ipt-curr", keyPressDeal);
		this.pagecontainer.on("click", ".page-index", _this, clickDeal).on("keypress", ".ipt-curr", _this, keyPressDeal);
	}

	function clickDeal(event) {
		var _this = event.data;
		var tar = $(this);
		var totle = _this.totle;
		if (tar.hasClass('page-up')) {
			--_this.index;
		} else if (tar.hasClass('page-down')) {
			++_this.index;
		} else if (tar.hasClass('page-first')) {
			_this.index = 1;
		} else if (tar.hasClass('page-end')) {
			_this.index = totle;
		} else {
			_this.index = ~~(tar.text());
		}
		renderDeal(tar, _this);
	}

	function keyPressDeal(event) {
		var _this = event.data;
		var tar = $(this);
		if (event.keyCode === 13) {
			var ipt = parseInt(tar.val());
			if (ipt <= _this.totle && ipt > 0) {
				_this.index = ipt;
			} else {
				alert("输入无效");
				return;
			}
			renderDeal(tar, _this);
		}
	}

	function renderDeal(tar, _this) {
		var size = _this.size,
			totle = _this.totle;
		//原则：将当前索引置于size/2+1处。
		//对于范围在[1,totle]区间的值，判断index在他的两个边界是否超长，来决定startindex的值。
		//其中的两个边界中，左边界是index-（size/2+1）,右边界为index+（size/2-1）
		if (_this.index - (size / 2 + 1) <= 0) {
			//1、当前索引小于size/2+1时，开始索引为1;
			_this.startindex = 1;
		} else if (_this.index + size / 2 - 1 >= totle) {
			//2、当前索引大于size/2+1且结束索引+size/2-1的值小于总量时，开始索引为总量-size;
			_this.startindex = totle - size + 1;
			_this.startindex < 1 && (_this.startindex = 1);
		} else if (_this.index > size / 2 + 1 && _this.index + size / 2 - 1 < totle) {
			//3、当前索引大于size/2+1且结束索引+size/2-1的值大于总量时，开始索引为当前索引减去size/2
			_this.startindex = _this.index - size / 2;
		}
		_this.endindex = _this.startindex + size > totle ? totle : _this.startindex + size - 1;
		_this.render();
		_this.callback && _this.callback.call(tar, _this.index);
	}

	Page.getSingleInstance = function(opt) {
		return new Page(opt);
	}
	window.Page = Page;
})();