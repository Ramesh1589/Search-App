


(function(){
        angular.module("movie")
        .controller("movieCtrl",["$scope","movieSvc",
                               function($scope,movieSvc){
       $scope.currentPage = 1;
        movieSvc.getMovie()
        .then(function(response){
            $scope.movie = response.data.movie;
        })
        .catch(function(response){
            $scope.showError=response;
        });

    /*Get Details Aftr Clicking Button */
            $scope.getDetails = function (item) {
            $scope.detail = {};
            $scope.detail = item;

        }
     /*End Of get detail function*/



    }]);
})();
