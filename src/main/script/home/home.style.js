/**
 * Created by phap on 08/01/17.
 */
'use strict';

angular.module('myApp')
    .config(function ($stateProvider) {

        $stateProvider
            .state('home', {
                parent: 'site',
                url: '/home',
                views:{
                    'content@':{
                        templateUrl:'script/home/home.html'
                    }
                }

            });
});
