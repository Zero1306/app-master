angular.module('starter')
    .controller('homeController', ['$scope', '$window', '$ionicHistory', function($scope, $window, $ionicHistory) {
        $ionicHistory.clearHistory()
        goTop()

        function goTop() {
            var bg = $window.document.getElementById('top')
            var goTop = document.querySelector(".back_top")
            bg.addEventListener('scroll', function() {
                var top = bg.scrollTop;
                if (top > 200) {
                    goTop.style.opacity = 1
                } else {
                    goTop.style.opacity = 0
                }
            }, false)

            goTop.onclick = function() {
                bg.scrollTop = 0
            }

        }
    }])