angular.module('app', ['ui.router', 'stormpath', 'stormpath.templates'])

    .controller('appController', function() {
        var vm = this;
        vm.title = 'hello from angular';
    })

    .config(function($stateProvider, STORMPATH_CONFIG) {
        // Routes
        $stateProvider.state('about', {
                url: '/about',
                templateUrl: 'about.html'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'login.html'
            });

        // Specify your Client API domain here:
        STORMPATH_CONFIG.ENDPOINT_PREFIX = 'https://ready-stream.apps.stormpath.io';
    })

    .run(function($stormpath) {
        $stormpath.uiRouter({
            loginState: 'login',
            defaultPostLoginState: 'about'
        });
    });
