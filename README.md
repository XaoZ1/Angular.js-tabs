# Angular.js-tabs

说明：
这个插件是需要基于angular.js的

使用方式
<my-tabs></my-tabs>

属性：
data：<array> tabs的名字

方法：
tab-selected： 当tab点击之后会触发的方法。$index参数是调用的tab的下标



示例：
在dom中：
<my-tabs data="tabsTitle" tab-selected="tabsChange($index)"></my-tabs>

在app.run的方法中：
$rootScope.tabsTitle = ['首页', '分类', '我的', '设置'];

$rootScope.tabsChange = function(n){
	$rootScope.selectIndex = n;
}


