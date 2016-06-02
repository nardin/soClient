function userController(userService)
{
    console.log(this);
    
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

angular.module("soApp").component('user', 
{
    restrict: 'AE',
    templateUrl: 'app/component/common/user.html',
    controller: userController,
    bindings :
    {
        name: "<",
        link: "<",
        badge: "<",
        image: "<"
    }
});