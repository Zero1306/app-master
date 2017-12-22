angular.module('starter')
    .controller('personalController', ['$scope', '$cookies', function($scope, $cookies) {
        var cookieName = $cookies.get('username')
        if (cookieName) {
            $('.personTop .btnLogin').hide()
            $('.personTop button.btnUser').show().html(cookieName).css('display', 'block')
        } else {
            $('.personTop .btnLogin').show()
            $('.personTop button.btnUser').hide()
        }
    }])