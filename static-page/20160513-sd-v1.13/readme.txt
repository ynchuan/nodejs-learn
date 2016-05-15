山东警务云前端切图

v1.0
如果要修改样式，请勿直接在base.css以及base.plugin.css文件中修改或者添加样式，请重新创建样式文件，采用样式选择器权重的形式进行样式的覆盖修改，方便后期其前端对界面进行维护和升级。
页面很有少量js代码，位于home.js中。

v1.1
根据美工反馈修改了一般样式，请覆盖base.css和base.plugin.css两个文件
同时对于局部部分修改了html代码，如果样式没有达到要求，请查看demo中的html代码，对应修改html代码。
ps：主要涉及修改html代码部分为：首屏时间轴部分、开发中心三个导航快部分，公安早八点橙红色块


v1.2
添加首屏白色半透明底部框。ps该白色透明底兼容ie9+
添加时间轴提示框
局部细节微调
该版本涉及的文件：base.css ，home.js 以及四张图片，使用请覆盖images文件夹，home.js以及base.css

v1.3
根据现场反馈修改样式
1、5s中自动轮播滚动
2、去掉时间轴，添加警务云大事件
3、底图固定
4、head跟随


v1.4  添加动态警务云界面
其中的地图采用svg|vml进行绘制，可以兼容ie低版本和现代浏览器;绘图工具采用raphael.js库;
文档http://raphaeljs.com/reference.html
1、对添加城市访问线提供了添加接口，例如：添加青岛到济南的访问线方法：mapRegion.renderArc("qingdao");
2、对于动态添加访问列表数据提供了方法：
例如：
$(".yc-list-li.yc-li-head").after('<tr class="yc-list-li"><td class="yc-list-cell"> 烟台市 </td> <td class="yc-list-cell">10.18.9.100</td><td class="yc-list-cell">烟台市局信通处</td></tr>');


具体请参见demo程序。

v1.5人像比对界面切图
+compare.html

v1.6人像比对界面换肤
+-compare.html

v1.7警信统计页面制作
+statistic-jx.html

v1.8山东警务千度新版本 
+cp-qd-search.html 新版千度搜索主页

v1.9山东警务千度新版本 
+cp-qd-result.html 搜索列表页面

v1.10山东警务千度新版本 
+cp-qd-detail-base.html 详细信息--人员基本信息

v1.11山东警务千度新版本 
+cp-qd-detail-imp.html 详细信息--重点人员
+cp-qd-detail-relate.html 详细信息--人员关系

v1.12山东警务千度新版本 
+cp-qd-detail-hd6.html 详细信息--华东6省
+cp-qd-detail-goods.html 详细信息--物品
+cp-qd-detail-statistic.html 详细信息--统计
+cp-qd-detail-socinfo.html 详细信息--社会信息

v1.13山东警务千度新版本 
+cp-qd-detail-case.html 详细信息--案件
+cp-qd-detail-trace.html 详细信息--轨迹   页面涉及page.js  请替换过去的page.js
+cp-qd-detail-experience.html 详细信息--个人经历
+cp-qd-detail-notepad.html 详细信息--记事本
+cp-qd-detail-remark.html 详细信息--备注
+cp-qd-detail-taxpayer.html 详细信息--纳税人信息
+-cp-qd-detail-base.html 详细信息--基本信息 该页面为修改流动人口部分。