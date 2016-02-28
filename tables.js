'use strict';

var app = angular.module('myApp', []);

app.controller('TablesCtrl', function ($scope) {
    $scope.reset = function () {
        $scope.digit1 = Math.floor((Math.random() * 9) + 1);
        $scope.digit2 = Math.floor((Math.random() * 9) + 1);
        $scope.answer = undefined;
    };

    $scope.games = 0;
    $scope.score = 0;
    $scope.reset();

    $scope.answered = function () {
        $scope.play()
    };

    $scope.press = function($event) {
        if ($event.keyCode == 13) {
            $scope.play()
        }
    };

    $scope.play = function () {
        $scope.games++;

        if ($scope.answer == ($scope.digit1 * $scope.digit2)) {
            $scope.score++;
            $scope.message = 'BRAVO!';
        } else {
            $scope.message = 'FAUX...';
        }

        $scope.reset();
    };
});
