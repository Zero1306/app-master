angular.module('starter')
    .controller('cartController', ['$scope', function($scope) {
        $scope.chooseData = JSON.parse(localStorage.getItem('chooseData'))
        if ($scope.chooseData) {
            $('.emptyCart').hide()
            $('.cartList').show()
        } else {
            $('.emptyCart').show()
            $('.cartList').hide()
        }

        $scope.goodsInfo = {
            color: ['黑色', '红色'],
            size: ['XS码', 'S码', 'M码', 'L码', 'XL码'],
            number: 1
        }

        // 数量加一
        $scope.add = function() {
            $scope.goodsInfo.number++
        }

        // 数量减一
        $scope.reduce = function() {
            if ($scope.goodsInfo.number != 1) {
                $scope.goodsInfo.number--
            }
        }

        // 移除本地缓存
        $scope.clearCart = function() {
            localStorage.removeItem('chooseData')
            location.reload()
        }

        $scope.refresh = function() {
            location.reload()
        }

    }])