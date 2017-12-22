angular.module('starter')
    .controller('registerController', ['$scope', '$http', function($scope, $http) {

        $scope.submit = function() {
            var data = {
                username: $scope.username,
                password: $scope.password
            }
            console.log(data)
            var config = {
                method: "post",
                url: "http://123.206.6.186:3000/register",
                data: data
            }
            $http(config)
                .then(function(data) {
                    console.log(data)
                    if (data.data.code == 0) {
                        alert('恭喜,注册成功')
                        location.href = '#/login'
                    } else {
                        alert('抱歉,注册失败，请稍后再试...')
                    }
                })
                .catch(function(err) {
                    console.log(err)
                })
        }

    }])