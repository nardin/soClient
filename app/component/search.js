'use strict';
function searchController($location)
{
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

angular
    .module('soApp')
    .component('search', {
        controller: searchController,
        templateUrl: 'app/component/search.html',
        bindings :
        {
            click: '&'
        }   
    }); 