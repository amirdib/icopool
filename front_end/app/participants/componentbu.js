angular.
    module('table').
    component('table', {
	templateUrl: 'table/template.html',
	controller: ["$scope", "$http", 'NgTableParams',
                     function($scope, $http, NgTableParams) {
			 $scope.data = [{name:"laocoon", name_full:"AD"}];
			 console.log($scope.data);
			 $scope.tableParams = new NgTableParams({},{dataset: $scope.data});
			 //debugger;
			 
		     }]
    });
