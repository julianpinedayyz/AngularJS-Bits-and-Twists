contacts
	.factory('Contact', ['$resource',
		function($resource){
			//the second parameter adds the ability to update the database. The @ tells angular what to update.
			return $resource('/api/contact/:name', {name: '@name.clean'});
	}])