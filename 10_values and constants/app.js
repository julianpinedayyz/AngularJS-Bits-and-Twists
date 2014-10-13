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
					templateUrl: 'views/customers.html'
				})
				.when('/orders/:customerId', {
					controller: 'myOrders',
					templateUrl: 'views/orders.html'
				})
				.otherwise( {redirectTo: '/' } );
		}])
}());