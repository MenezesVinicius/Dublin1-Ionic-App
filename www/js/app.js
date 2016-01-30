// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        // setup an abstract state for the tabs directive
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })

        .state('app.search', {
            url: '/search',
            views: {
                'app-search': {
                    templateUrl: 'templates/search/search.html',
                    controller: 'SearchCtrl'
                }
            }
        })

        .state('app.searchFacility', {
            url: '/search/:facilityID',
            views: {
                'app-search': {
                    templateUrl: 'templates/search/facility.html',
                    controller: 'FacilityCtrl'
                }
            }
        })

        .state('app.nearBy', {
            url: '/nearBy',
            views: {
                'app-nearBy': {
                    templateUrl: 'templates/nearBy/nearBy.html',
                    controller: 'NearByCtrl'
                }
            }
        })

        // Each tab has its own nav history stack:

        .state('app.categories', {
            url: '/categories',
            views: {
                'app-categories': {
                    templateUrl: 'templates/categories/tab-categories.html',
                    controller: 'CategoriesCtrl'
                }
            }
        })

        .state('app.category', {
            url: '/categories/:categoryID',
            views: {
                'app-categories': {
                    templateUrl: 'templates/categories/category.html',
                    controller: 'CategoryCtrl'
                }
            }
        })

        .state('app.category-results', {
            url: '/categories/category/:catResultsName',
            views: {
                'app-categories': {
                    templateUrl: 'templates/categories/category-results.html',
                    controller: 'CategoryResults'
                }
            }
        })

        .state('app.catFacility', {
            url: '/categories/category/facility/:facilityID',
            views: {
                'app-categories': {
                    templateUrl: 'templates/categories/facility.html',
                    controller: 'FacilityCtrl'
                }
            }
        })

        .state('app.bookmarks', {
            url: '/bookmarks',
            views: {
                'app-bookmarks': {
                    templateUrl: 'templates/bookmarks/tab-bookmarks.html',
                    controller: 'BookMarksCtrl'
                }
            }
        })

        .state('app.settings', {
            url: '/settings',
            views: {
                'app-settings': {
                    templateUrl: 'templates/settings/tab-settings.html',
                    controller: 'SettingsCtrl'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/categories');
});
