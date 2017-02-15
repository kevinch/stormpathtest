angular.module('app', ['stormpath','stormpath.templates'])
    .controller('appController', function() {
        var vm = this;
        vm.title = 'hello from angular';
    })
    .config(function (STORMPATH_CONFIG) {

    // Specify your Client API domain here:
    STORMPATH_CONFIG.ENDPOINT_PREFIX = 'https://ready-stream.apps.stormpath.io';
  });
