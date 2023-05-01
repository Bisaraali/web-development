function Quiz(questions){
    this.score =0;
    this.questions=questions;
    this.currentQuestionIndex =0;
}

Quiz.prototype.quess=function(answer){
    if(this.getCurrentQuestion().isCorrectAnswer(answer)){
        this.score++;
    }
    this.currentQuestionIndex++;
};
