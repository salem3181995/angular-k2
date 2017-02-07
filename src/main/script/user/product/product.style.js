/**
 * Created by phap on 08/01/17.
 */
'use strict';

angular.module('myApp')
    .config(function ($stateProvider) {

        $stateProvider
            .state('product', {
                parent: 'site',
                url: '/product',
                views:{
                    'content@':{
                        templateUrl:'script/product/product.html'
                    }
                }

            });
    });
