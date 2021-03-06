(function() {
  'use strict';

  var core = angular.module('app.core');

  core.config(function($mdThemingProvider) {

    $mdThemingProvider.definePalette('pipalette', {
      '50': 'e6f8ed',
      '100': 'aae8c2',
      '200': '7edba3',
      '300': '46cc7b',
      '400': '35bf6b',
      '500': '2ea75e',
      '600': '278f50',
      '700': '217743',
      '800': '1a5f35',
      '900': '144728',
      'A100': 'd8fce6',
      'A200': '78f5aa',
      'A400': '2cdc72',
      'A700': '2ec168',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': [
        '50',
        '100',
        '200',
        '300',
        '400',
        'A100',
        'A200',
        'A400',
        'A700'
      ],
      'contrastLightColors': [
        '500',
        '600',
        '700',
        '800',
        '900'
      ]
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('pipalette')
      .accentPalette('blue');
  });
})();
