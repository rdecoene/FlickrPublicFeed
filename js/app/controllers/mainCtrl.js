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
			var splittedLink = value.link.split('/'); //Split link to remove photo ID
			value.authorLink = splittedLink[0] + '//' + splittedLink[2] + '/' + splittedLink[3] + '/' + splittedLink[4];
			/*date & time*/
			//Splitting up "yyyy-mm-ddThh-mm-ssZ"
			value.year = value.published.substring(0,4);
			value.month = value.published.substring(5,7);
			value.day = value.published.substring(8,10);
			value.hour = value.published.substring(11,13);
			value.minutes = value.published.substring(14,16);

			switch(value.month) //Asigning month to number
			{
				case '01':
					value.month = "January";
				break;
				case '02':
					value.month = "February";
				break;
				case '03':
					value.month = "March";
				break;
				case '04':
					value.month = "April";
				break;
				case '05':
					value.month = "May";
				break;
				case '06':
					value.month = "June";
				break;
				case '07':
					value.month = "July";
				break;
				case '08':
					value.month = "August";
				break;
				case '09':
					value.month = "September";
				break;
				case '10':
					value.month = "October";
				break;
				case '11':
					value.month = "November";
				break;
				case '12':
					value.month = "December";
				break;


			}
		});

		console.log(data);
		
		$scope.pictures = data;
		
	});
		

});