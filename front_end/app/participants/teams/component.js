angular.
  module('teams').
  component('teams', {
    templateUrl: 'teams/template.html',
    controller: ["$scope", "$http", 'NgTableParams', 'StateService',
                      function($scope, $http, NgTableParams, StateService) {

      $scope.setTeam = StateService.setTeam;

      $http
        .get('http://localhost:8080/teams')
        .then(function(response) {
          var teams = response.data;
          var keys = Object.keys(teams);

          $scope.data = keys.map(function(k) {return teams[k]})
          $scope.tableParams = new NgTableParams(
            {},
            {counts: [10], dataset: $scope.data}
          );
        });
    }]
  });
