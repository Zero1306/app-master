angular.module('starter')
    .controller('loginController', ['$scope', '$http', '$cookies', function($scope, $http, $cookies) {
        $scope.submit = function() {
            var $username = $('input[name="username"]').val()
            var $password = $('input[name="password"]').val()
            $http({
                    method: 'GET',
                    url: 'http://123.206.6.186:3000/login/' + $username + '/' + $password
                })
                .then(function(data) {
                    console.log(data)
                    if (data.data.code == 0) {
                        $cookies.put('username', $username)
                        location.href = '#/personal'
                        location.reload()
                    } else {
                        alert('对不起,用户名不存在或密码错误！')
                    }
                })
                .catch(function(err) {
                    console.log(err)
                })
        }
    }])