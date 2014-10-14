(function () {
angular.module('myApp')
	//This can't be injected into the config
	.value('appSettings', {
		title: "Customers Application",
		version: 1.0
	})
	//This one can be injected into the config
	// .constant('appSettings', {
	// 	title: "Custumers Application",
	// 	version: 1.0
	// })
}());