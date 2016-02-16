'use strict';

/**
 * @ngdoc overview
 * @name chartsApp
 * @description
 * # chartsApp
 *
 * Main module of the application.
 */
angular
  .module('chartsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'chart.js',
    'chartsApp.constant'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("home");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/main.html",
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .state('about', {
      url: "/about",
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .state('contacts', {
      url: "/contacts",
      templateUrl: "views/contacts.html"
    })
    .state('sub-chart', {
      url: '/sub-chart/:category/:value',
      templateUrl: 'views/sub-charts.html',
      controller: 'SubChartsCtrl',
      controllerAs: 'subChart'
    })
    .state('details', {
      url: '/details/:subCategory/:value',
      templateUrl: 'views/details.html',
      controller: 'DetailsCtrl',
      controllerAs: 'details'
    });
  });
