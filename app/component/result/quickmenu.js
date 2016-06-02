 function quickmenuController(){
 }


angular.module("soApp").component('quickmenu', 
{
    restrict: 'AE',
    templateUrl: 'app/component/result/quickmenu.html',
    controller: quickmenuController,
    bindings :
    {
        type:'<',
        id: '<',
    }
});