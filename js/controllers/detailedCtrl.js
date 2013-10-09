define(['modules/app'], function(app){
	app.controller("DetailedCtrl", function($scope, $routeParams, sharedProperties){
		$scope.detailedId = $routeParams.itemId;
		$scope.photos = sharedProperties.getpics();
		$scope.detailedPhoto = $scope.photos.items[$scope.detailedId];
		
		//Clean Description
		var splittedDesc = $scope.detailedPhoto.description.split("</p>");
		$scope.detailedPhoto.desc = splittedDesc[2];
		$('.description').append($scope.detailedPhoto.desc);
		
		//Empty title
		if ($scope.detailedPhoto.title == "" || $scope.detailedPhoto.title == null){
			$scope.detailedPhoto.title = "No Title";
		}

		//console.log(sharedProperties.getpics());
	});
});