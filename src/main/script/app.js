/**
 * Created by phap on 08/01/17.
 */
'use strict';

angular.module('myApp',['ui.router'])
    .config(function ($urlRouterProvider,$stateProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('site',{
                views:{
                    'navbar@':{
                        templateUrl:'script/component/navbar/navbar.html'
                    },
                    'footer@':{
                        templateUrl:'script/component/footer/footer.html'
                    },
                }
            })

    })
    .run(function () {

    });