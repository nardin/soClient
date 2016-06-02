function quickmenuuserController(userService)
{
    this.$onInit = () =>
    {
        console.log("user init");
    };
    
    this.$onChanges = (changesObj) => {
        console.log(changesObj);
        console.log("user onchange");
        if(!!this.id){
        
            console.log("user onchange");
            console.log(changesObj);
            console.log(this.id);
            userService.getUser(this.id).then((data)=>
            {
                console.log(data);
                this.user = data.data.items[0];    
            });
            userService.getTopQuestions(this.id).then((data)=>
            {
                console.log(data);
                this.questions = data.data.items;    
            });
        }
    }
}

angular.module("soApp").component('quickmenuuser', 
{
    restrict: 'AE',
    transclude: true,
    templateUrl: 'app/component/result/quickmenu/quickmenu-user.html',
    controller: quickmenuuserController,
    bindings :
    {
        id: '<',        
        questions: '&'
    }
});