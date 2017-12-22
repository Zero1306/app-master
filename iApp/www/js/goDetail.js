angular.module('starter')
    .controller('goDetailController', ['$scope', '$http', '$ionicLoading', '$window', '$ionicHistory', function($scope, $http, $ionicLoading, $window, $ionicHistory) {
        $scope.goodsInfo = {
            color: ['黑色', '红色'],
            size: ['XS码', 'S码', 'M码', 'L码', 'XL码'],
            number: 1
        }
        $scope.selected = 0
        $scope.sChoose = function($index) {
            $scope.selected = $index
        }
        $scope.cSelected = 0
        $scope.cChoose = function($index) {
            $scope.cSelected = $index
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

        // 加入购物车方法
        var chooseData = [{
            imgSrc: "img/clothes1.jpg",
            title: "MR MODONIN 计广杰 会听你说话的神秘眨眼潮服 声控眨眼猫头鹰印花黑色男款上衣",
            color: "黑色",
            size: "XS码",
            money: "¥ 799.00",
            number: 1
        }]

        $scope.addCart = function() {
            localStorage.setItem('chooseData', JSON.stringify(chooseData))
            alert('成功加入购物车！')
        }



        $scope.newComment = []
        $('.g-tabs a').click(function() {
            $(this).addClass('tab-detail-active').siblings().removeClass('tab-detail-active')
            $('.dHide').hide()
        })

        $scope.loadMore = function() {
            $http
                .get('http://123.206.6.186:3000/comment')
                .then(function(res) {
                    $scope.newComment = $scope.newComment.concat(res.data.data.comment)
                    $scope.comment = $scope.newComment
                    $scope.$broadcast('scroll.infiniteScrollComplete')
                })
                .catch(function(err) {
                    $ionicLoading.show({
                        template: '数据加载失败,请稍后再试...',
                        duration: 3000
                    })
                })
        }
        $scope.loadMore()

        // 回到顶部
        // goTop()

        // function goTop() {
        //     var bg = $window.document.getElementById('top')
        //     var goTop = document.querySelector(".back_top")
        //     bg.addEventListener('scroll', function() {
        //         var top = bg.scrollTop;

        //         if (top > 200) {
        //             goTop.style.opacity = 1
        //         } else {
        //             goTop.style.opacity = 0
        //         }
        //     }, false)

        //     goTop.onclick = function() {
        //         bg.scrollTop = 0
        //     }

        // }

        // 返回按钮方法
        // $scope.goBack = function() {
        //     history.go(-1)
        // }


    }])