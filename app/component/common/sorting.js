function sortingController(userService)
{
    this.$onInit = () =>
    {   
    }
    
    this.$onChanges = (changesObj) => {
        
    }
}

angular.module("soApp").component('sorting', 
{
    restrict: 'AE',
    templateUrl: 'app/component/common/sorting.html',
    controller: userController,
    bindings :
    {
        data: "&",
        onChange: "&"
    }
});