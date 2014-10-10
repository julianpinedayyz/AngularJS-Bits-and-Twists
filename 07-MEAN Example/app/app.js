/**
* contacts Module
*
* Simple Contacts app connecting to MongoDB
*/
var contacts = angular.module('contacts', ['ngResource', 'ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
	  // Set up our routes
	  $routeProvider
		.when('/contact/:name', {
		  controller: 'Single',
		  templateUrl: 'partials/single.html'
		})
		.when('/add', {
		  controller: 'Add',
		  templateUrl: 'partials/add.html'
		})
		.when('/', {
		  controller: 'Table',
		  templateUrl: 'partials/table.html'
		});
	  // Use HTML5 mode (History API) when changing URL
	  $locationProvider.html5Mode(true);
	})