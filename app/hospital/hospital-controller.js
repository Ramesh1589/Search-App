

(function(){
        angular.module("hospital")
        .controller("hospitalCtrl",["$scope","hospitalSvc",
                               function($scope,hospitalSvc){
        hospitalSvc.getHospital()
        .then(function(response){
            $scope.hospital = response.data.hospital;
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
