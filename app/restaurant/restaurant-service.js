(function(){
    angular.module("restaurant")
    .service("restaurantSvc",["$http",function($http){
          this.getRestaurant=function(){
          return  $http.get("app/api/restaurant.json");
           
        };
    }]);
})();