/**
* myApp Module
*
* Description
*/
(function () {
	var myApp = angular.module('myApp', ['ngRoute'])
		.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/', {
					controller: 'myList',
					templateUrl: 'views/customers.html'
				})
				.when('/orders/:customerId', {
					controller: 'myOrders',
					templateUrl: 'views/orders.html'
				})
				.otherwise( {redirectTo: '/' });
			$locationProvider.html5Mode(true);
		}])
}());