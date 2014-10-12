(function () {
angular.module('myApp')
	.directive('contenteditable', function() {
		return {
		  restrict: 'A',
		  require: '?ngModel',
		  link: function(scope, element, attrs, ngModel) {
		    if(!ngModel) return; // do nothing if no ng-model

		    // Listen for change events to enable binding
		    element.on('blur change keyup', function() {
		      scope.$apply(function() {
		      	var html = element.html();
			      if( attrs.stripBr && html == '<br>' ) {
			        html = '';
			      }
			      ngModel.$setViewValue(html.replace(/(<br>)/g, ''));
			    });
		    });
		    // Specify how UI should be updated
		    ngModel.$render = function() {
		      element.html(ngModel.$viewValue || '');
		    };
		  }
		}
	});
}());

//This has ro be refined