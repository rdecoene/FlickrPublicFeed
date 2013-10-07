app.controller("MainCtrl", function($scope, $http, $timeout){

	$scope.pictures = []; 
	$scope.filtertext = null;


	$http.get('http://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=?').success(function(data){
		data = data.replace(/\\'/g, "'"); //Cleaning bad JSON received from Flickr
		data = data.substring(1);
		data = data.substring(0, data.length - 1);
		data = angular.fromJson(data);

		//Clean up data
		angular.forEach(data.items, function(value, index) {
			value.author = value.author.substring(19, value.author.length - 1); //Removing nobody@flickr.com
		});

		console.log(data);
		
		$scope.pictures = data;
		
	});
		

});