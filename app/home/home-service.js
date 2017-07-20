(function(){
    angular.module("home")
    .service("homeSvc",["$http",
                           function($http){
        this.getHome=function(){
          return  $http.get("app/api/home.json");

        };
    }]);
})();
