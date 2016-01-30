var app = angular.module('starter.controllers', []);

app.controller('SearchCtrl', function ($scope, SearchService, JSONService) {
    $scope.Search = function (searchText) {
        this.textSearch = null;
        SearchService.findSearch(searchText).then(function (results) {
            var x2js = new X2JS();
            var jsonObject = x2js.xml_str2json(results.data);
            var resultsSorted = JSONService.sortJSON(jsonObject.markers.marker, 'name');
            facilities = resultsSorted;
            console.log(facilities);
            $scope.resultsSearch = resultsSorted;
        })
    }
})

app.controller('FacilityCtrl', function ($scope, $stateParams, FacilityService) {
    var ID = $stateParams.facilityID;
    FacilityService.findFacility(ID).then(function(result){
        console.log(result.data);
        var x2js = new X2JS();
        var jsonObject = x2js.xml_str2json(result.data);
        console.log(jsonObject);
        $scope.facility = jsonObject.facility;
    })
})

app.controller('NearByCtrl', function ($scope) {

})

app.controller('CategoriesCtrl', function ($scope, CategoriesService) {
    $scope.categories = CategoriesService.all();
})

app.controller('CategoryCtrl', function ($scope, $stateParams, CategoryService) {
    var catID = $stateParams.categoryID;
    console.log(catID);

    CategoryService.findCategory(catID).then(function (subCategories) {
        console.log(subCategories.data);
        var x2js = new X2JS();
        var jsonObject = x2js.xml_str2json(subCategories.data);
        console.log(jsonObject.items);
        angular.forEach(jsonObject.items.item, function (value, key) {
            console.log("Name: " + value.name);
        })
        $scope.category = jsonObject.items.item;
    })
})

app.controller('CategoryResults', function ($scope, $stateParams, ResultsCategoryService, JSONService) {
    var catResultsName = $stateParams.catResultsName;
    console.log(catResultsName);

    ResultsCategoryService.findPlaces(catResultsName).then(function (places) {
        console.log(places.data);
        var x2js = new X2JS();
        var jsonObject = x2js.xml_str2json(places.data);
        console.log(jsonObject.markers);
        angular.forEach(jsonObject.markers.marker, function (value, key) {
            console.log("Name: " + value.name);
        })
        var resultsSorted = JSONService.sortJSON(jsonObject.markers.marker, 'name');
        $scope.results = resultsSorted;
    })
})

app.controller('BookMarksCtrl', function ($scope, $stateParams) {
    // $scope.chat = Chats.get($stateParams.chatId);
})

app.controller('SettingsCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
