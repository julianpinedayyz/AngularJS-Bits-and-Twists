/**
* myApp Module
*
* Description
*/
angular.module('myApp', [])
	.directive('click', function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function(scope, element, attrs) {
				element.bind('click', function(){
					scope.$eval(attrs.click);
				});
			}
		};
	})
	//Example replacing element with transclude
	//Also notice how the scope is activated so the click function doesn't trigger twice.  It uses the "Example2" controller in this case.
	.directive('clicker', function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// templateUrl: '',
			replace: true,
			transclude: true,
			template: '<button ng-transclude></button>',
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function(scope, element, attrs) {
				element.bind('click', function(){
					scope.$eval(attrs.click);
				});
			}
		};
	})
	.controller('Example', ['$scope', function($scope){
		$scope.message = 'Hello';
		$scope.click = function(){
			alert($scope.message);
		};
	}])
	.controller('Example2', ['$scope', function($scope){
		$scope.message = 'I have been transcluded';
		$scope.handler = function(){
			alert($scope.message);
		};
	}]);