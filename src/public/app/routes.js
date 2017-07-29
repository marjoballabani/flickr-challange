angular.module('app')
.config(function (
    $stateProvider,
    $urlRouterProvider
) {

    $urlRouterProvider.otherwise('/form')

    $stateProvider
        .state('app', {
            abstract: true,
            templateUrl: 'app/app.html',
            controllerAs: '$ctrl',
            controller: function (
                $state
            ) {
                this.goHome = () => {
                    $state.go('app.form')
                }
            }
        })
        .state('app.details', {
            url: '/details',
            abstract: false,
            component: "searchDetails"
        })
        .state('app.form', {
            url: '/form',
            abstract: false,
            component: "searchForm"
        })

})
