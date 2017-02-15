angular.module('app', ['ui.router'])
    .controller('appController', function() {
        var vm = this;
        vm.title = 'hello from angular';
    })
    .config(function($stateProvider) {
        // Routes
        var helloState = {
            name: 'hello',
            url: '/hello',
            templateUrl: 'hello.html'
        }

        var aboutState = {
            name: 'about',
            url: '/about',
            templateUrl: 'about.html'
        }

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
    });
