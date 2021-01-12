import slugify from 'react-slugify';

export class Correction {
  constructor (fullQuestion, answerUser) {
    this.fullQuestion = fullQuestion;
    this.answerUser = answerUser;
    this.answerFiltered = '';
    this.singleAnswer = Array.isArray(this.fullQuestion.answer) ? fullQuestion.answer[0] : fullQuestion.answer;
  }

  checkAnswer() {
    if (Array.isArray(this.fullQuestion.answer)) {
      this.answerFiltered = this.fullQuestion.answer.find(item => slugify(item) === slugify(this.answerUser));
    } else {
      this.answerFiltered = this.fullQuestion.answer;
    }
  
    if (slugify(this.answerFiltered) === slugify(this.answerUser)) return true;
    this.answerFiltered = this.answerUser;
    return false;
   }

   getFullUserAnswer() {
    return (this.fullQuestion.question.replace('_____', this.answerFiltered));
   }

   getFullStdAnswer() {
    return(this.fullQuestion.question.replace('_____', this.singleAnswer));
   }

}
