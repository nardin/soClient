function paggingController(userService)
{
    this.$onInit = () =>
    {
        this.page = 1;
        this.pagesize = 10;   
    }
    
    this.$onChanges = (changesObj) => {
        
    }
}

angular.module("soApp").component('pagging', 
{
    restrict: 'AE',
    templateUrl: 'app/component/common/pagging.html',
    controller: userController,
    bindings :
    {
        page: "&",
        pagesize: "&"
    }
});