var keyAPI = "ef1b2b0d52a115f0a9d8b8a6e92b4119";
var baseURL = "http://www.dublin.ie/maps/api.php?apikey=" + keyAPI;
var app = angular.module('starter.services', []);

app.factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
    }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
    }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});

app.factory('FacilitiesService', function ($http) {
    var Categories = [];

    return {
        findAll: function () {
            var promise = $http({
                method: 'GET',
                url: baseURL + "&action=getFacilities",
                crossDomain: true
            });

            promise.success(function (data) {

            }).error(function (err) {
                console.log(err);
            });
            return promise;
        },

        findById: function (vendedorId) {
            for (var i = 0; i < Vendedores.length; i++) {
                if (Vendedores[i].id == vendedorId) {
                    var vendedor = Vendedores[i];
                    if (vendedor.ddd == 48) {
                        vendedor.ddd = "";
                    }
                    else if (vendedor.ddd != "" && vendedor.ddd.length == 2) {
                        vendedor.ddd = "041" + vendedor.ddd;
                    }

                    console.log(vendedor.nome);
                    return vendedor;
                }
            }
        }
    }
});
