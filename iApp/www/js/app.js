// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCookies'])
    .config(['$stateProvider', '$urlRouterProvider', function($sp, $urp) {
        $sp.state('slide', {
            url: '/slide',
            views: {
                index: {
                    templateUrl: 'views/slide.html'
                }
            }
        }).state('tabs', {
            abstract: true,
            views: {
                index: {
                    templateUrl: 'views/tabs.html'
                }
            }
        }).state('tabs.home', {
            url: '/home',
            views: {
                home: {
                    templateUrl: 'views/tabs/home.html'
                }
            }
        }).state('tabs.message', {
            url: '/message',
            views: {
                home: {
                    templateUrl: 'views/tabs/home/message.html'
                }
            }
        }).state('tabs.goDetail', {
            url: '/goDetail',
            views: {
                home: {
                    templateUrl: 'views/tabs/home/goDetail.html'
                }
            }
        }).state('tabs.goods', {
            url: '/goods',
            views: {
                goods: {
                    templateUrl: 'views/tabs/goods.html',
                    controller: 'goodsController'
                }
            }
        }).state('tabs.cart', {
            url: '/cart',
            views: {
                cart: {
                    templateUrl: 'views/tabs/cart.html'
                }
            }
        }).state('tabs.personal', {
            url: '/personal',
            views: {
                personal: {
                    templateUrl: 'views/tabs/personal.html',
                    controller: 'personalController'
                }
            }
        }).state('tabs.set', {
            url: '/set',
            views: {
                personal: {
                    templateUrl: 'views/tabs/personal/set.html',
                    controller: 'setController'
                }
            }
        }).state('tabs.login', {
            url: '/login',
            views: {
                personal: {
                    templateUrl: 'views/tabs/user/login.html'
                }
            }
        }).state('tabs.register', {
            url: '/register',
            views: {
                personal: {
                    templateUrl: 'views/tabs/user/register.html'
                }
            }
        }).state('tabs.order', {
            url: '/order',
            views: {
                personal: {
                    templateUrl: 'views/tabs/personal/order.html',
                    controller: 'orderController'
                }
            }
        }).state('tabs.privateCustom', {
            url: '/privateCustom',
            views: {
                personal: {
                    templateUrl: 'views/tabs/personal/privateCustom.html'
                }
            }
        }).state('tabs.logistics', {
            url: '/logistics',
            views: {
                personal: {
                    templateUrl: 'views/tabs/personal/logistics.html'
                }
            }
        }).state('tabs.address', {
            url: '/address',
            views: {
                personal: {
                    templateUrl: 'views/tabs/personal/address.html'
                }
            }
        }).state('tabs.coupons', {
            url: '/coupons',
            views: {
                personal: {
                    templateUrl: 'views/tabs/personal/coupons.html'
                }
            }
        }).state('tabs.giftCard', {
            url: '/giftCard',
            views: {
                personal: {
                    templateUrl: 'views/tabs/personal/giftCard.html'
                }
            }
        }).state('tabs.giftCardInstructions', {
            url: '/giftCardInstructions',
            views: {
                personal: {
                    templateUrl: 'views/tabs/personal/giftCardInstructions.html'
                }
            }
        })
        $urp.when('', '/slide')
    }])
    .controller('rootController', ['$ionicTabsDelegate', '$scope', '$state', function($itd, $scope, $state) {
        $scope.$on('$ionicView.beforeEnter', function(event, data) {
            if (data.stateName == 'tabs.set' || data.stateName == 'tabs.login' || data.stateName == 'tabs.register' || data.stateName == 'tabs.goDetail' || data.stateName == 'tabs.privateCustom' || data.stateName == 'tabs.logistics' || data.stateName == 'tabs.address' || data.stateName == 'tabs.giftCard' || data.stateName == 'tabs.giftCardInstructions' || data.stateName == 'tabs.coupons') {
                $itd.showBar(false)
            } else {
                $itd.showBar(true)
            }
            // if (data.stateName == 'tabs.home') {
            //     $scope.enabled = true
            // } else {
            //     $scope.enabled = false
            // }
        })

        // $('body').delegate('.tabs-icon-top .apphome', 'click', function() {
        //     location.reload()
        // })

    }])
    .run(function($ionicPlatform) {
        ionic.Platform.setPlatform('ios')
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })