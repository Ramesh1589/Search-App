

(function(){
        angular.module("tourism")
        .controller("tourismCtrl",["$scope","tourismSvc",
                               function($scope,tourismSvc){
                                    
               $scope.currentPage = 1;

        tourismSvc.getTourism()
        .then(function(response){
            $scope.tourism = response.data.tourism;
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