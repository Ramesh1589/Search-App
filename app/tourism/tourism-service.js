(function(){
    angular.module("tourism")
    .service("tourismSvc",["$http",function($http){
          this.getTourism=function(){
          return  $http.get("app/api/tourism.json");
           
        };
    }]);
})();