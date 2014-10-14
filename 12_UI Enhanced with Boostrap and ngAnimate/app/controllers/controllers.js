(function () {
angular.module('myApp')
	.controller('myList', ['$scope', '$filter', 'appSettings', 'myFactory', '$log',
				function($scope, $filter, appSettings, myFactory, $log){
		//Set defaults
		$scope.sortBy = 'name';
		$scope.reverse = false;
		$scope.appSettings = appSettings;

		function init(){
			myFactory.getCustomers()
				.success(function(customers){
					$scope.customers = customers;
				})
				.error(function(data, status, headers, config){
					//using $log to retrive errors from the server
					$log.log(data.error + ' ' + status)
				});
		}
		init();

		$scope.add = function(){
			$scope.customers.push({
				name: $scope.new_name,
				age: $scope.new_age,
				joined: $filter('date')($scope.new_joined, 'MM/dd/yyyy'),
				city: $scope.new_city,
				orderTotal: $scope.new_orderTotal
			});
			$scope.new_name = '';
			$scope.new_age = '';
			$scope.new_joined = '';
			$scope.new_city = '';
			$scope.new_orderTotal = '';
		}
		// $scope.remove = function(customerId){
		// 	// $scope.customers.splice(customerId, 1)
		// 	myFactory.remove(customerId)
		// 		.success(function(status){
		// 			if(status){
		// 				for(var i=0, len=$scope.customers.length;len<i; i++){
		// 					if($scope.customers[i].id === customerId)
		// 						$scope.customers.splice(i,1);
		// 						break;
		// 				}
		// 			}
		// 			else {
		// 				$window.alert('Unable to delete customers');
		// 			}
		// 		})
		// 		.error(function(data, status, headers, config){
		// 			//using $log to retrive errors from the server
		// 			$log.log(data.error + ' ' + status)
		// 		});
		// }
		$scope.doFilter = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		}
	}])
	.controller('myOrders', ['$scope','$routeParams', 'myFactory', '$log',
					function($scope, $routeParams, myFactory, $log){

		$scope.orders = null;

		function init(){
			myFactory.getCustomer($routeParams.customerId)
				.success(function(customer){
					$scope.customer = customer;
					$scope.orders = customer.orders;
				})
				.error(function(data, status, headers, config){
					//using $log to retrive errors from the server
					$log.log(data.error + ' ' + status)
				});
		}
		init();
	}])
	.controller('allOrders', ['$scope','myFactory', function($scope, myFactory){
		$scope.ordersAll = null;
		$scope.ordersTotal = 0.0;
		$scope.totalType;

		function init(){
			myFactory.getOrders()
				.success(function(orders){
					$scope.ordersAll = orders;
					getOrdersTotal();
				})
				.error(function(data, status, headers, config){
					//using $log to retrive errors from the server
					$log.log(data.error + ' ' + status)
				});
		}
		function getOrdersTotal(){
			var total = 0;
			for (var i = 0, len=$scope.ordersAll.length; i < len; i++) {
				total += $scope.ordersAll[i].total;
			};
			$scope.ordersTotal = total;
			$scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
		}
		init();


	}])
}());