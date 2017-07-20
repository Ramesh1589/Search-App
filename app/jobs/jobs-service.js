(function(){
    angular.module("jobs")
    .service("jobSvc",["$http",function($http){
        this.getJobs=function(){
        return  $http.get("app/api/jobs.json");
           
        };
                    
    } ]);  
    
   /* myApp.service("engineeringSvc",["$http",function($http){
          this.getEngineeringjobs=function(){
          return  $http.get("app/api/engineeringjobs.json");
           
        };
    }]);*/
    
    
})();




