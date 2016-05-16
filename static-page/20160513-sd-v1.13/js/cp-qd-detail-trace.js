$(function() {
	/**
	 * 分页，如果更换了查询条件，异步请求后可以多次调用page.init(传递总数据条数) ，
	 * 如果没有更换查询（过滤）条件，可以在callback中刷新页面分页
	 */
	var page1 = Page.getSingleInstance({
		container: $("#page1"),
		length: 10,
		callback: function(page) {
			alert(page);
		}
	});
	page1.init({
		total: 68,
	});
	var page2 = Page.getSingleInstance({
		container: $("#page2"),
		length: 10,
		callback: function(page) {
			alert(page);
		}
	});
	page2.init({
		total: 103,
	});
	var page3 = Page.getSingleInstance({
		container: $("#page3"),
		length: 10,
		callback: function(page) {
			alert(page);
		}
	});
	page3.init({
		total: 13,
	});
});