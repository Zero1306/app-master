angular.module('starter')
    .controller('setController', ['$scope', '$cookies', '$ionicHistory', function($scope, $cookies, $ionicHistory) {
        var cookieName = $cookies.get('username')
        $scope.click = function() {
            $cookies.remove('username', cookieName)
            location.href = '#/personal'
            location.reload()
        }
    }])