(function () {
angular.module('myApp')
	.factory('myFactory', ['$http','$routeParams', function($http, $routeParams){

		var factory = {};

		factory.getCustomers = function(){
			return $http({
				method: 'GET',
				url: '/customers',
				cache: true
			});
		};
		factory.getCustomer = function(){
			return $http({
				method: 'GET',
				url: '/customers/' + $routeParams.customerId,
				cache: true
			});
		};
		factory.getOrders = function() {
            return $http({
            	method: 'GET',
            	url: '/orders',
            	cache: true
            });
        }
        factory.deleteCustomer = function(customerId) {
            return $http.delete('/customers/' + $routeParams.customerId);
        }
		return factory;
	}])
}());