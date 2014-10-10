contacts
	.controller('Contacts', ['$scope', '$resource',
		function($scope, $resource){
}])
	.controller('Table', ['$scope', '$resource', 'Contact',
		function($scope, $resource, Contact){
			//notice how this is contacts is in plural.  It is because is getting the list
			$scope.contacts = Contact.query();
}])
	.controller('Single', ['$scope','$resource','$routeParams', 'Contact', '$timeout', '$location',
		function($scope, $resource, $routeParams, Contact, $timeout, $location){
			//here contact in singular is getting only the array with the specific name
			$scope.contact = Contact.get({ name: $routeParams.name });

			//set a timeout so we POST only after 1sec delay.
			//I think this takes a lot of resources and maybe a Save button is better
			var saveTimeout;
			saveTimeout = $timeout(function(){
				$scope.save = function(){
					$scope.contact.$save(function(updated_contact){
						//updates the information inside the object
						$scope.contact = updated_contact;
						//updates the url so we don't get lost
						//The replace bit will reset the history to the current new url
						$location.path('/contact' + upadate_contact.name.clean).replace();
					});
				}
			}, 1000);
}])
	.controller('Add', ['$scope','$resource', 'Contact', '$location',
		function($scope, $resource, Contact, $location){
			$scope.contact = new Contact({});

			$scope.save = function(){
				$scope.contact.$save(function(){
					//This will return the user to the home page
					$location.path('/');
				});
		}
}]);