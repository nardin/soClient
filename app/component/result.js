'use strict';

function searchresultController($location)
{
    var $ctrl = this;
    console.log("searchresult");
    $ctrl.$routerOnActivate = (param)=>
    {
        console.log(param);
    }
    $ctrl.$onInit = () =>
    {
        console.log("searchresult");  
        this.display_quickmenu = true;
    }
    this.$routerOnActivate = function(param) {
        // Load up the heroes for this view
        this.query = param.params.query;
        this.q = param.params.query;
        console.log(param.params);  
    };
    
    this.keypress = function ($event) {
        console.log($event.keyCode);
        console.log(this.q);
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            $location.path('/result/' + this.q); 
        }
    }
    
    this.click = function(){
        $location.path('/result/' + this.q);
    }
}

angular.module("soApp").component('searchresult', {
    templateUrl: 'app/component/result.html',
    controller: searchresultController,
    bindings :
    {
        query: '&',
        q: '&',
        display_quickmenu: '&'
    }
});