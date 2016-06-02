function answerController($sce){
    console.log(this.data);
    this.body = $sce.trustAsHtml(this.data.body);
}

angular.module("soApp").component('answer', 
{    
    templateUrl: 'app/component/question/answer.html',
    controller: answerController,
    bindings:
    {
        data: '=',
        body: '&'
    }
});