var app = angular.module('starter.controllers', []);

app.controller('HomeCtrl', function ($scope, FacilitiesService) {
    FacilitiesService.findAll().then(function (facilities) {
        console.log(facilities.data);
        var x2js = new X2JS();
        var jsonObject = x2js.xml_str2json(facilities.data);
        console.log(jsonObject.markers);
        angular.forEach(jsonObject.markers.marker, function (value, key) {
            console.log("Name: " + value.name);
        })

    })
})

app.controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})

app.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

app.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
