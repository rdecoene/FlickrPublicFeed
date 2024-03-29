require.config({
	baseUrl: '/FlickrPublicFeed/js',
	paths: {
		'jQuery': '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
		'angular' : '//ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min',
		'angular-resource': '//ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular-resource.min'
		//solution with cookies. Data is too big to use cookies
		//,'angular-cookies': '//ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular-cookies.min' 
	},
	shim: {
		'angular' : {'exports' : 'angular'},
	 	'angular-resource': { deps:['angular']},
	 	//'angular-cookies': { deps:['angular']},
		'jQuery': {'exports' : 'jQuery'}

	}
});

require(['jQuery', 'angular', 'routes/mainRoutes'], function($, angular, mainRoutes){
	$(function() {
		angular.bootstrap(document, ['FlickrFeed']);
	});
});