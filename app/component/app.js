'use strict';

function AppController()
{
    this.$onInit = () => {
        console.log("init");
    }
}

angular.module("soApp").component('app', 
{
    template: '<ng-outlet></ng-outlet>',
    controller: AppController,
    bindings :
    {   
    },
    $routeConfig: [
        {path: '/',                name: 'Main',     component: 'search', useAsDefault: true},
        {path: '/result/:query',   name: 'Result',   component: 'searchresult'},
        {path: '/question/:id',    name: 'Question', component: 'question'},
    ]
});