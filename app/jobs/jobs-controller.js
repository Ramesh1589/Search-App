(function(){
    angular.module("jobs")
    .controller("jobCtrl",["$scope","jobSvc",function($scope,jobSvc){

        $scope.currentPage = 1;
        jobSvc.getJobs()
        .then(function(response){
        $scope.jobs = response.data.jobs;
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





