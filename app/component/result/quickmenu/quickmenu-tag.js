function quickmenutagController(tagService)
{
    this.$onInit = () =>
    {
    };
    this.$onChanges = (changesObj) => {
        console.log("tag c");
        if(!!this.id){
            tagService.getFAQ(this.id).then((data)=>
            {
                console.log(data);
                this.questions = data.data.items;    
            });
        }
    }
}

angular.module("soApp").component('quickmenutag', 
{
    restrict: 'AE',
    transclude: true,
    templateUrl: 'app/component/result/quickmenu/quickmenu-tag.html',
    controller: quickmenutagController,
    bindings :
    {
        id: '<',
        questions: '&'
    }
});