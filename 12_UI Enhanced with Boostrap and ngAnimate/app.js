/**
* myApp Module
*
* Description
*/
(function () {
	var myApp = angular.module('myApp', ['ngRoute'])
		.config(['$routeProvider',function($routeProvider) {
			$routeProvider
				.when('/', {
					controller: 'myList',
					templateUrl: 'app/views/customers.html'
				})
				.when('/orders/:customerId', {
					controller: 'myOrders',
					templateUrl: 'app/views/orders.html'
				})
				.when('/orders', {
					controller: 'allOrders',
					templateUrl: 'app/views/allorders.html'
				})
				.otherwise( {redirectTo: '/' } );
		}])
}());