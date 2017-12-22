angular.module('starter')
    .controller('goodsController', ['$scope', '$http', '$ionicLoading', '$ionicSlideBoxDelegate', function($scope, $http, $ionicLoading, $isbd) {
        $scope.goods = []
            // 123.206.6.186
        $scope.load = function() {
            $http.get('http://123.206.6.186:3000/goods')
                .then(function(data) {
                    $scope.data = data.data.data.goodsList
                    $scope.categoryDetailData = data.data.data.recommend
                    $scope.getCategoryDetailData = function(typeNumber) {
                        if (typeNumber == 1) {
                            $scope.categoryDetailData = data.data.data.recommend
                        } else if (typeNumber == 2) {
                            $scope.categoryDetailData = data.data.data.manClo
                        } else if (typeNumber == 3) {
                            $scope.categoryDetailData = data.data.data.womenClo
                        } else if (typeNumber == 4) {
                            $scope.categoryDetailData = data.data.data.manShoes
                        } else if (typeNumber == 5) {
                            $scope.categoryDetailData = data.data.data.womenShoes
                        } else if (typeNumber == 6) {
                            $scope.categoryDetailData = data.data.data.socks
                        } else if (typeNumber == 7) {
                            $scope.categoryDetailData = data.data.data.household
                        } else if (typeNumber == 8) {
                            $scope.categoryDetailData = data.data.data.chilrenClo
                        } else if (typeNumber == 9) {
                            $scope.categoryDetailData = data.data.data.underwear
                        } else {
                            $scope.categoryDetailData = data.data.data.accessories
                        }
                    };
                })
                .catch(function(err) {
                    $ionicLoading.show({
                        template: '对不起,请求失败...',
                        duration: 3000
                    })
                })
        }
        $scope.load()

        $scope.left = 0
        $scope.swipeLeft = function() {
            $('.nowrap .list').animate({
                left: -($('.nowrap .list').width() / 2.8)
            }, 500)
        }
        $scope.swipeRight = function() {
            $('.nowrap .list').animate({
                left: 0
            }, 500)
        }

        $scope.change = function($index) {
            console.log($index)
            index = $index || 0
            if ($index > 5 && $index < 9) {
                $('.nowrap .list').css('left', -(index - 5) * $('.zy-tabs').outerWidth())
            }
            if ($index < 5) {
                $('.nowrap .list').css('left', 0)
            }
            $('.zy-tabs').eq(index).addClass('item-active').siblings().removeClass('item-active')
            $isbd.slide(index)
        }

        $('.g-tabs a').click(function() {
            $(this).addClass('tab-item-active').siblings().removeClass('tab-item-active')
            $('.h-classify').hide()
        })

        // 左侧单击分类样式
        $scope.categoryLeftClick = function(e) {
            e.target.className = 'nav-current';
            $(e.target).siblings().removeClass().addClass('nav-blur');
        };

        $scope.brand = function() {
            $http.get('http://123.206.6.186:3000/api/brand')
                .then(function(data) {
                    // console.log(data)
                    $scope.brand = data.data.data
                })
                .catch(function(err) {
                    $ionicLoading.show({
                        template: '对不起,数据加载失败...',
                        duration: 3000
                    })
                })
        }
        $scope.brand()


    }])