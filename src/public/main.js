angular
.module('app', [
    'ui.router',
    'commons',
    'angular.filter'
])
.config(function (
    $compileProvider
) {
    // auto-bindings to prevent using $onInit
    $compileProvider.preAssignBindingsEnabled(true);
})
.run(function (

) {

})
