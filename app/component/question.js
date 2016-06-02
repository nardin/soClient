'use strict';
function questionController($sce, questionService)
{
    this.$onInit = () =>
    {
        console.log("searchresult");
        
        this.display_quickmenu = true;
    }
    this.$routerOnActivate = function(param) {
        // Load up the heroes for this view
        var id = param.params.id;
        questionService.get(id).then((data)=>
        {
            console.log(data);
            var question = data.data.items[0];
            this.question = question;
            this.body = $sce.trustAsHtml(question.body);
                
        });
        questionService.getAnswers(id).then((data)=>
        {
            this.answers = data.data.items;    
        });       
    };
    this.body = $sce.trustAsHtml('');
}

angular.module('soApp')
    .component('question', {
        restrict: 'AE',
        templateUrl: 'app/component/question.html',
        controller: questionController,
        bindings :
        {
            question: '&',
            body: '&',
            answers: '&'
        }
})