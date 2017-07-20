(function(){
    angular.module("movie")
    .service("movieSvc",["$http",function($http){
          this.getMovie=function(){
          return  $http.get("app/api/movie.json");

        };
    }]);
})();
