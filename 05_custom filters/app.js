/**
* myApp Module
*
* Description
*/
angular.module('myApp', [])
	//Filter without passing parameters.
	.filter('clean', function(){
		return function(input){
			return input
					.toLowerCase()
					.replace(/\s+/g, '-')
					.replace(/[^a-z0-9-]/ig, '');
		};
	})
	//Filter passing parameters from the user.
	.filter('cleanParams', function(){
		return function(input, separator){
			var filter = new RegExp('[^a-z0-9-'+ (separator || '-') +']', 'ig')
			return input
					.toLowerCase()
					.replace(/\s+/g, (separator || '-'))
					.replace(filter, '');
		}
	})
	.controller('Filter', ['$scope', function($scope){
		$scope.text = 'Hello World, this is a clean filter!'
	}]);