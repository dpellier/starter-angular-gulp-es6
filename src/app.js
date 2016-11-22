
import HomeCtrl from './app/home/home.js';

const main = angular.module('starter-angular-gulp-es6', [
    'templates',
    'environmentConfig',
    'ui.router',
    'pascalprecht.translate'
])
    .controller('homeCtrl', HomeCtrl)

    .config(($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) => {
        $locationProvider.html5Mode(true);
        $urlMatcherFactoryProvider.strictMode(false);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'controller'
            });
    })

    .config(($translateProvider) => {
        $translateProvider.preferredLanguage('en').fallbackLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escaped');

        $translateProvider.useStaticFilesLoader({
            prefix: '../assets/i18n/locale-',
            suffix: '.json'
        });
    })

    .run(($rootScope) => {
        $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
            console.error(`Cannot transition from ${fromState.name} to ${toState.name}`);   // eslint-disable-line no-console
            console.error(error);                                                           // eslint-disable-line no-console
        });
    });

angular.element(document).ready(() => {
    angular.bootstrap(document, [main.name]);
});
