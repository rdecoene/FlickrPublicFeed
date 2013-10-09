define([
	'angular', 
	'angular-resource',
	'angular-cookies'
], function (angular){
	return angular.module('FlickrFeed', ['ngResource', 'ngCookies'])
				  .service('sharedProperties', function(){
				  	var pics = [];
				  	return {
				  		getpics: function () {
				  			return pics;
				  		},
				  		setpics: function (val) {
				  			pics = val;
				  		}
				  	};
				   });
});

