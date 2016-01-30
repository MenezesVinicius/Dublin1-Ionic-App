var keyAPI = "ef1b2b0d52a115f0a9d8b8a6e92b4119";
var baseURL = "http://www.dublin.ie/maps/api.php?apikey=" + keyAPI;
var app = angular.module('starter.services', []);

app.factory('CategoriesService', function () {
    var Categories = [{
        id: 1,
        name: 'Arts & Culture'
    }, {
        id: 15,
        name: 'Community'
    }, {
        id: 7,
        name: 'Community Health'
    }, {
        id: 13,
        name: 'Commuting and Transport'
    }, {
        id: 14,
        name: 'Council Facilities'
    }, {
        id: 5,
        name: 'Education'
    }, {
        id: 6,
        name: 'Government and Legal'
    }, {
        id: 8,
        name: 'Information Services'
    }, {
        id: 10,
        name: 'Places of Worship'
    }, {
        id: 22,
        name: 'Recycling Facilities'
    }, {
        id: 12,
        name: 'Sports & Recreation'
    }, {
        id: 11,
        name: 'Youth'
    }];

    return {
        all: function () {
            return Categories;
        }
    };
});

app.factory('CategoryService', function ($http) {
    return {
        findCategory: function (categoryID) {
            var promise = $http({
                method: 'GET',
                url: baseURL + "&action=clsStore&categoryID=" + categoryID,
                crossDomain: true
            });

            promise.success(function (data) {
                console.log(data);
            }).error(function (err) {
                console.log(err);
            });
            return promise;
        }
    }
});

app.factory('ResultsCategoryService', function ($http) {
    return {
        findPlaces: function (subCategoryName) {
            var promise = $http({
                method: 'GET',
                url: baseURL + "&action=getFacilities&what=" + subCategoryName + "&page=showAll",
                crossDomain: true
            });

            promise.success(function (data) {
                console.log(data);
            }).error(function (err) {
                console.log(err);
            });
            return promise;
        },

        sortJSON: function sortByKey(array, key) {
            return array.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }
    }
});



