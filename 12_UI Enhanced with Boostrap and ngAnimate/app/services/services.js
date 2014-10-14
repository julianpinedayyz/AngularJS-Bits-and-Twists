(function () {
angular.module('myApp')
	.factory('myFactory', ['$http','$routeParams', function($http, $routeParams){

		var factory = {};

		factory.getCustomers = function(){
			return $http.get('/customers');
		};
		factory.getCustomer = function(){
			return $http.get('/customers/' + $routeParams.customerId);
		};
		factory.getOrders = function() {
            return $http.get('/orders');
        }
        factory.deleteCustomer = function(customerId) {
            return $http.delete('/customers/' + $routeParams.customerId);
        }
		return factory;
	}])
}());