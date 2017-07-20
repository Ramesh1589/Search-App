(function ()
 {
        angular.module('restaurant')
        .controller('restaurantCtrl', ['$scope', 'restaurantSvc',
                               function ($scope, restaurantSvc) {
      $scope.currentPage = 1;
        restaurantSvc.getRestaurant()
        .then(function (response) {
            $scope.restaurant = response.data.restaurant;
        })
        .catch(function (response) {
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
