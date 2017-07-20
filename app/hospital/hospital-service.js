(function(){
    angular.module("hospital")
    .service("hospitalSvc",["$http",function($http){
          this.getHospital=function(){
          return  $http.get("app/api/hospital.json");
           
        };
    }]);
})();