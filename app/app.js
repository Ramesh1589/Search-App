    var myApp = angular.module('myApp', ['login', 'register', 'ui.router', 'ui.bootstrap',
   'home', 'realestate', 'hospital', 'restaurant', 'jobs', 'tourism', 'movie', 'angularUtils.directives.dirPagination']);

  myApp.controller('mainController', function () {
      console.log('It works');


    });
  myApp.config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', { url: '/home', templateUrl: 'app/templates/home.html', controller: 'homeCtrl', });
    $stateProvider.state('realestate', { url: '/realestate', templateUrl: 'app/templates/realestate.html', controller: 'realestateCtrl', });
    $stateProvider.state('hospital', { url: '/hospital', templateUrl: 'app/templates/hospital.html', controller: 'hospitalCtrl', });
    $stateProvider.state('movie', { url: '/movie', templateUrl: 'app/templates/movie.html', controller: 'movieCtrl', });
    $stateProvider.state('tourism', { url: '/tourism', templateUrl: 'app/templates/tourism_main.html', controller: 'tourismCtrl', });
    $stateProvider.state('register', { url: '/register', templateUrl: 'app/templates/register.html', controller: 'registerCtrl', });
    $stateProvider.state('login', { url: '/login', templateUrl: 'app/templates/login.html', controller: 'loginCtrl', });

    $stateProvider.state ('restaurant', { url: '/restaurant', templateUrl: 'app/templates/restaurant.html', controller: 'restaurantCtrl', });
    $stateProvider.state('restaurant.restaurant&cafes', { url: '/restaurant&cafes', templateUrl: 'app/templates/restaurant&cafes.html', controller: 'restaurant&cfesCtrl', });
    $stateProvider.state('restaurant.panshop', { url: '/panshop', templateUrl: 'app/templates/panshop.html', controller: 'panshopCtrl', });
    $stateProvider.state('restaurant.cake', { url: '/cake', templateUrl: 'app/templates/cake.html', controller: 'cakeCtrl', });
    $stateProvider.state('restaurant.dryfruits', { url: '/dryfruits', templateUrl: 'app/templates/dryfruits.html', controller: 'dryfruitsCtrl', });
    $stateProvider.state('restaurant.juicecenter', { url: '/juicecenter', templateUrl: 'app/templates/juicecenter.html', controller: 'juicecenterCtrl', });
    $stateProvider.state('restaurant.fastfood', { url: '/fastfood', templateUrl: 'app/templates/fastfood.html', controller: 'fastfoodCtrl', });
    $stateProvider.state('restaurant.winesshop', { url: '/winesshop', templateUrl: 'app/templates/winesshop.html', controller: 'winesshopCtrl', });
    $stateProvider.state('restaurant.pizzacorners', { url: '/pizzacorners', templateUrl: 'app/templates/pizzacorners.html', controller: 'pizzacornersCtrl', });
    $stateProvider.state('restaurant.cofeeshop', { url: '/cofeeshop', templateUrl: 'app/templates/cofeeshop.html', controller: 'cofeeshopCtrl', });
    $stateProvider.state('restaurant.chinesefood', { url: '/chinesefood', templateUrl: 'app/templates/chinesefood.html', controller: 'chinesefoodCtrl', });
    $stateProvider.state('restaurant.sweetshop', { url: '/sweetshop', templateUrl: 'app/templates/sweetshop.html', controller: 'sweetshopCtrl', });
    $stateProvider.state('restaurant.familyrestaurant', { url: '/familyrestaurant', templateUrl: 'app/templates/familyrestaurant.html', controller: 'familyrestaurantCtrl', });
    $stateProvider.state('restaurant.restaurant&bar', { url: '/restaurant&bar', templateUrl: 'app/templates/restaurant&bar.html', controller: 'restaurant&barCtrl', });
    $stateProvider.state('restaurant.banquethall', { url: '/banquethall', templateUrl: 'app/templates/banquethall.html', controller: 'banquethallCtrl', });
    $stateProvider.state('restaurant.birthdayhall', { url: '/birthdayhall', templateUrl: 'app/templates/birthdayhall.html', controller: 'birthdayhallCtrl', });
    $stateProvider.state('restaurant.lawns&gardens', { url: '/lawns_gardens', templateUrl: 'app/templates/lawns_gardens.html', controller: 'lawns_gardensCtrl' , });

    $stateProvider.state('jobs', { url: '/jobs', templateUrl: 'app/templates/jobs.html', controller: 'jobCtrl', });
    $stateProvider.state('jobs.engineeringjob', { url: '/engineeringjob', templateUrl: 'app/templates/engineeringjob.html', controller: 'engineeringCtrl', });
    $stateProvider.state('jobs.teacherjob', { url: '/teacherjob', templateUrl: 'app/templates/teacherjob.html', });
    $stateProvider.state('jobs.civiljob', { url: '/civiljob', templateUrl: 'app/templates/civil.html', });
    $stateProvider.state('jobs.officeassistant', { url: '/officeassistantjob', templateUrl: 'app/templates/officeassistant.html', });
    $stateProvider.state('jobs.bpojobs', { url: '/bpojobs', templateUrl: 'app/templates/bpo.html', });
    $stateProvider.state('jobs.marketingjobs', { url: '/marketingjobs', templateUrl: 'app/templates/marketing.html', });
    $stateProvider.state('jobs.deliveryboy', { url: '/deliveryboy', templateUrl: 'app/templates/deliveryboy.html', });
    $stateProvider.state('jobs.housekeeping', { url: '/housekeeping', templateUrl: 'app/templates/housekeeping.html', });
//     $locationProvider.html5Mode(true);
});


     myApp.controller('engineeringCtrl', ['$scope','$http',function ($scope,$http){

       console.log("I am in engineering job controller");
       $scope.engCount = 4;
       $http.get("app/api/engineeringjobs.json").success(function(response){
       $scope.engineeringjobs = response.engineeringjobs;

      });

        $scope.showMore = function () {
                $scope.engCount += 1;
            };
     }]);



     myApp.controller('civilCtrl',['$scope','$http',function($scope,$http){

      console.log("I am in civil job controller");
       $scope.cvCount = 4;
       $http.get("app/api/civil.json").success(function(response){
       $scope.civiljobs = response.civiljobs;

      });

        $scope.showMore = function () {
                $scope.cvCount += 3;
            };
     }]);


     myApp.controller('teacherCtrl',['$scope','$http',function($scope,$http){

      console.log("I am in teacher job controller");
       $scope.tcCount = 4;
       $http.get("app/api/teacher.json").success(function(response){
       $scope.teacherjobs = response.teacherjobs;

      });

        $scope.showMore = function () {
                $scope.tcCount += 3;
            };
     }]);


     myApp.controller('bpoCtrl',['$scope','$http',function($scope,$http){

      console.log("I am in BPO job controller");
       $scope.bpCount = 4;
       $http.get("app/api/bpo.json").success(function(response){
       $scope.bpojobs = response.bpojobs;

      });

        $scope.showMore = function () {
                $scope.bpCount += 3;
            };
     }]);

     myApp.controller('marketingCtrl',['$scope','$http',function($scope,$http){

      console.log("I am in marketing job controller");
       $scope.mkCount = 4;
       $http.get("app/api/marketing.json").success(function(response){
       $scope.marketingjobs = response.marketingjobs;

      });

        $scope.showMore = function () {
                $scope.mkCount += 3;
            };
     }]);


     myApp.controller('deliveryboyCtrl',['$scope','$http',function($scope,$http){

      console.log("I am in deliveryboy job controller");
       $scope.dbCount = 4;
       $http.get("app/api/deliveryboy.json").success(function(response){
       $scope.deliveryboyjobs = response.deliveryboyjobs;

      });

        $scope.showMore = function () {
                $scope.dbCount += 3;
            };
     }]);


     myApp.controller('housekeepingCtrl',['$scope','$http',function($scope,$http){

      console.log("I am in housekeeping job controller");
       $scope.hkCount = 4;
       $http.get("app/api/housekeeping.json").success(function(response){
       $scope.housekeepingjobs = response.housekeepingjobs;

      });

        $scope.showMore = function () {
                $scope.hkCount += 3;
            };
     }]);

     //Pan Shop Controller

     myApp.controller('panshopCtrl',['$scope','$http',function($scope,$http){
      $scope.panshop=[];
      $scope.currentPage = 1;
       $http.get("app/api/panshop.json").success(function(response){
       $scope.panshop = response.panshop;

      });


     }]);

     //cake controller

      myApp.controller('cakeCtrl',['$scope','$http',function($scope,$http){

       $scope.currentPage = 1;
       $http.get("app/api/cake&icecream.json").success(function(response){
       $scope.cake = response.cake;

      });


     }]);

      //Dry Fruites...

      myApp.controller('dryfruitsCtrl',['$scope','$http',function($scope,$http){

       $scope.currentPage = 1;
       $http.get("app/api/dryfruits.json").success(function(response){
       $scope.dryfruits = response.dryfruits;
      });
    }]);

      //juice center

      myApp.controller('juicecenterCtrl',['$scope','$http',function($scope,$http){

       $scope.currentPage = 1;
       $http.get("app/api/juicecenter.json").success(function(response){
       $scope.juicecenter = response.juicecenter;

      });

     }]);

     //fastfood...

     myApp.controller('fastfoodCtrl',['$scope','$http',function($scope,$http){

       $scope.currentPage = 1;
       $http.get("app/api/fastfood.json").success(function(response){
       $scope.fastfood = response.fastfood;

      });

     }]);

     //wines shop

     myApp.controller('winesshopCtrl',['$scope','$http',function($scope,$http){

       $scope.currentPage = 1;
       $http.get("app/api/winesshop.json").success(function(response){
       $scope.winesshop = response.winesshop;

      });
    }]);
      //Pizza Corners...

      myApp.controller('pizzacornersCtrl',['$scope','$http',function($scope,$http){

       $scope.currentPage = 1;
       $http.get("app/api/pizzacorners.json").success(function(response){
       $scope.pizzacorners = response.pizzacorners;

      });
     }]);
     //Cofee  shops

      myApp.controller('cofeeshopCtrl',['$scope','$http',function($scope,$http){

       $scope.currentPage = 1;
       $http.get("app/api/cofeeshop.json").success(function(response){
       $scope.cofeeshop = response.cofeeshop;

      });

     }]);

     //Sweet shop

      myApp.controller('sweetshopCtrl',['$scope','$http',function($scope,$http){

       $scope.currentPage = 1;
       $http.get("app/api/sweetshop.json").success(function(response){
       $scope.sweetshop = response.sweetshop;

     });
     }]);

      //Family Restaurants

      myApp.controller('familyrestaurantCtrl',['$scope','$http',function($scope,$http){

       $scope.currentPage = 1;
       $http.get("app/api/familyrestaurant.json").success(function(response){
       $scope.familyrestaurant = response.familyrestaurant;

      });
     }]);
     //
    //  myApp.controller('panshopCtrl',['$scope','$http',function($scope,$http){
     //
    //        console.log("I am restaurant controller");
    //         $scope.frCount = 4;
    //         $http.get("app/api/familyrestaurant.json").success(function(response){
    //         $scope.restaurant = response.restaurant;
     //
    //        });
     //
    //          $scope.showMore = function () {
    //                  $scope.frCount += 3;
    //              };
    //       }]);

      //Retaurant & Bar
      myApp.controller('restaurant_barCtrl',['$scope','$http',function($scope,$http){

      console.log("I am in restaurant_bar controller");
       $scope.rbCount = 4;
       $http.get("app/api/restaurant_bar.json").success(function(response){
       $scope.restaurant_bar = response.restaurant_bar;

      });

        $scope.showMore = function () {
                $scope.rbCount += 3;
            };
     }]);

      //BAnqueet Hall

      myApp.controller('banquethallCtrl',['$scope','$http',function($scope,$http){

      console.log("I am in banquethall controller");
       $scope.bhCount = 4;
       $http.get("app/api/banquethall.json").success(function(response){
       $scope.banquethall = response.banquethall;

      });

        $scope.showMore = function () {
                $scope.bhCount += 3;
            };
     }]);
     //Birthday Hall

      myApp.controller('birthdayhallCtrl',['$scope','$http',function($scope,$http){

      console.log("I am in birthdayhall controller");
       $scope.brCount = 4;
       $http.get("app/api/birthdayhall.json").success(function(response){
       $scope.birthdayhall = response.birthdayhall;

      });

        $scope.showMore = function () {
                $scope.brCount += 3;
            };
     }]);

      //Lawns And Gardens

      myApp.controller('lawns_gardensCtrl',['$scope','$http',function($scope,$http){

      console.log("I am in lawns_gardens controller");
       $scope.lwCount = 4;
       $http.get("app/api/lawns_gardens.json").success(function(response){
       $scope.lawns_gardens = response.lawns_gardens;

      });

        $scope.showMore = function () {
                $scope.lwCount += 3;
            };
     }]);
