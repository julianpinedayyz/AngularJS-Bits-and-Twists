var myController = function($scope){
	$scope.name = 'Julian';
	$scope.age = 20;
};
var anotherController = function($scope){
	$scope.name = 'Mark';
	$scope.age = 40;
	$scope.$watch('name', function(){
		console.log($scope.name);
	});
};