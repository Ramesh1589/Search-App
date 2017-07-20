(function(){
    angular.module("realestate")
    .service("realestateSvc",["$http",
                           function($http){
        this.getRealestate=function(){
          return  $http.get("app/api/realestate.json");
          
        };
    }]);
})();