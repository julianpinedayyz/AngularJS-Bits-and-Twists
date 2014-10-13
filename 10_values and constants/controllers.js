(function () {
angular.module('myApp')
	.controller('myList', ['$scope', '$filter', 'appSettings', function($scope, $filter, appSettings){
		//Set defaults
		$scope.sortBy = 'name';
		$scope.reverse = false;
		$scope.appSettings = appSettings;

		$scope.customers =[
			{
				id: 1,
				name: 'Jack',
				age: '23',
				joined: '2000-12-02',
				city: 'New York',
				orderTotal: 3.54,
				orders: [
					{
						id: 1,
						product: 'Shoes',
						total: 3.54
					}
				]
			},
			{
				id: 2,
				name: 'Malcom',
				age: '24',
				joined: '2013-06-22',
				city: 'San Francisco',
				orderTotal: 10,
				orders: [
					{
						id: 2,
						product: 'Shirt',
						total: 4.99
					},
					{
						id: 3,
						product: 'Pants',
						total: 4.99
					}
				]
			},
			{
				id: 3,
				name: 'Peter',
				age: '22',
				joined: '2011-08-15',
				city: 'San Diego',
				orderTotal: 19.95,
				orders: [
					{
						id: 4,
						product: 'Baseball',
						total: 9.995
					},
					{
						id: 5,
						product: 'Bat',
						total: 9.995
					}
				]
			},
			{
				id: 4,
				name: 'Lori',
				age: '32',
				joined: '2010-03-17',
				city: 'Chicago',
				orderTotal: 13.9997,
				orders: [
					{
						id: 6,
						product: 'Cap',
						total: 3.9997
					},
					{
						id: 7,
						product: 'Album',
						total: 10
					}
				]
			}
		];
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
		$scope.remove = function(index){
			$scope.customers.splice(index, 1)
		}
		$scope.doFilter = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		}
	}])
	.controller('myOrders', ['$scope','$routeParams', function($scope, $routeParams){
		var customerId = $routeParams.customerId;
		$scope.orders = null;

		function init(){
			//Search the customer for the customerId
			for(var i=0, len=$scope.customers.length; i<len; i++){
				if($scope.customers[i].id === parseInt(customerId)){
					$scope.orders = $scope.customers[i].orders;
					break;
				}
			}
		}

		$scope.customers =[
			{
				id: 1,
				name: 'Jack',
				age: '23',
				joined: '2000-12-02',
				city: 'New York',
				orderTotal: 3.54,
				orders: [
					{
						id: 1,
						product: 'Shoes',
						total: 3.54
					}
				]
			},
			{
				id: 2,
				name: 'Malcom',
				age: '24',
				joined: '2013-06-22',
				city: 'San Francisco',
				orderTotal: 10,
				orders: [
					{
						id: 2,
						product: 'Shirt',
						total: 4.99
					},
					{
						id: 3,
						product: 'Pants',
						total: 4.99
					}
				]
			},
			{
				id: 3,
				name: 'Peter',
				age: '22',
				joined: '2011-08-15',
				city: 'San Diego',
				orderTotal: 19.95,
				orders: [
					{
						id: 4,
						product: 'Baseball',
						total: 9.995
					},
					{
						id: 5,
						product: 'Bat',
						total: 9.995
					}
				]
			},
			{
				id: 4,
				name: 'Lori',
				age: '32',
				joined: '2010-03-17',
				city: 'Chicago',
				orderTotal: 13.9997,
				orders: [
					{
						id: 6,
						product: 'Cap',
						total: 3.9997
					},
					{
						id: 7,
						product: 'Album',
						total: 10
					}
				]
			}
		];

		init();
	}])
}());