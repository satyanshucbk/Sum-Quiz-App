import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
 private quesData:any;
  constructor( public router: Router, private questionsservice: QuestionsService) { }

  ngOnInit() {
    this.quesData = this.questionsservice.getQuestions(0);
  }


  goBackAvatar(){
    this.router.navigate(['avatar']);
  }
 getNextQuestion(id){
   
  this.quesData = this.questionsservice.getQuestionById(id+1);
 }
 getPreviousQuestion(id){

  this.quesData = this.questionsservice.getQuestionById(id-1);
 }
}
