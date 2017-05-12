angular.module('tabs-module', [])

.directive('myTabs', function(){
				
	return {
		restrict: 'E',
		replace: false,
		template: '<nav class="tabs"><li ng-repeat="title in data" ng-click="tabAction($index)">{{title}}</li></nav>',
		//给指令设置独立的作用域
//		scope: true,
		
		//给指令设置隔绝的作用域
		scope: {
			//这个对象中是接收指令的属性
			//data: '@', //接收普通的字符串
			data: '=', //接收的值是变量
			tabSelected: '&' //接收的是函数
		},
		controller: ['$scope', function($scope){
			$scope.val = '123';
			console.log($scope.data)
			
			$scope.tabAction = function(index){
				
				console.log(index)
				
				//调用外部通过属性的方式传入进来的方法
				//如果要传参，需要定义参数名字
				$scope.tabSelected( {$index: index} );
			}
			
		}]
	} 
	
})