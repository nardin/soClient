function ResultController($location, soService){
        var ctrl = this;
        this.$onInit = this.$onChanges = () => {
            console.log(this.search)
            this.display_quickmenu = false;
            this.result = soService.get({search : this.search});
            
            this.showUser = (userId) =>
            {
                this.display_quickmenu = true;
                this.eid = userId; 
                this.type = 'user';
                this.quickmenu = {
                    type:'user',
                    id: userId    
                }
                /*$location.hash('user');
                $location.state({user:userId});
                console.log("show user: " + userId);*/
            }
            
            this.showTag = (tagid) =>
            {
                this.display_quickmenu = true;
                this.eid = tagid;
                this.quickmenu = {
                    type:'tag',
                    id: tagid    
                }
                console.log(tagid);
            } 
            
            this.hideQuickmenu = () =>
            {
                this.display_quickmenu = false;
            }
            
            this.toQuestion = (questionId) =>
            {
                $location.path('/question/' + questionId);       
            
            }
            
   }        
} 

angular.module("soApp").component('result', {
    templateUrl: 'app/component/result/result.html',
    controller: ResultController,
    bindings :
    {
        search: '=',
        display_quickmenu: '&',
        quickmenu: '&',
        
        toQuestion: '&',
        showUser: '&',
        eid: '&'
    }
});