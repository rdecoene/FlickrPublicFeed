define([
	'angular', 
	'angular-resource'
], function (angular){
	return angular.module('FlickrFeed', ['ngResource'])
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

