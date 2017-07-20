(function () {
    'use strict'
    //code goes here.
    angular.module("register")
        .controller("registerCtrl",
            function ($scope, $state) {
                $scope.userDetails = {
                    terms: false
                };
                
                $scope.registerUser = function () {
                    console.log($scope.userDetails);
                    $state.go("home", {
                        userDetails: $scope.userDetails
                    });
                };
            });
})();
