angular.
    module('participants').
    component('participants', {
	templateUrl: 'participants/template.html',
	controller: ["$scope", "$http", 'NgTableParams',
                     function($scope, $http, NgTableParams) {
			 $scope.data = [{name:"laocoon", name_full:"AD"}, {name:"BA", name_full:"123"}];
			 console.log($scope.data);
			 $scope.tableParams = new NgTableParams({},{dataset: $scope.data});
			 //debugger;
		     }]
    });
