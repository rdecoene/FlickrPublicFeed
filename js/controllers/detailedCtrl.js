define(['modules/app'], function(app){
	app.controller("DetailedCtrl", function($scope, $routeParams, sharedProperties){
		$scope.detailedId = $routeParams.itemId;						//get ID of clicked picture
		$scope.photos = sharedProperties.getpics();						//get pictures from custom service
		$scope.detailedPhoto = $scope.photos.items[$scope.detailedId];	//get specific picture data
		
		//Clean up description
		var splittedDesc = $scope.detailedPhoto.description.split("</p>");
		$scope.detailedPhoto.desc = splittedDesc[2];
		$('.description').append($scope.detailedPhoto.desc);
		
		//Empty title | if title is empty
		if ($scope.detailedPhoto.title == "" || $scope.detailedPhoto.title == null){
			$scope.detailedPhoto.title = "No Title Available";
		}

		
	});
});