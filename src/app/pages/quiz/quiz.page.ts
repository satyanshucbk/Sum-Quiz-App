import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

 private quesData: any;
 userAnswer: any = {};

 goBackAvatar() {
  this.router.navigate(['avatar']);
}


  constructor(public router: Router,
              private questionsservice: QuestionsService,
              public loadingcontroller: LoadingController
              ) { }

  ngOnInit() {
    this.quesData = this.questionsservice.getQuestions(0);
  }
/*--Get Next Question--*/
  async getNextQuestion(id) {
    this.quesData = this.questionsservice.getQuestionById(id + 1);

/*-Loader-*/
    const loading = await this.loadingcontroller.create ({
          message: 'Loading...'
        });
    loading.present();
    setTimeout(() => {
            loading.dismiss();
          }, 1000);
  }
/*--GetPrevious Question--*/
  async getPreviousQuestion(id) {
    this.quesData = this.questionsservice.getQuestionById(id - 1);

/*-Loader-*/
    const loading = await this.loadingcontroller.create ({
      message: 'Loading...'
    });
    loading.present();
    setTimeout(() => {
        loading.dismiss();
      }, 1000);
    }
/*--Submit Function--*/
    getSubmit() {
      this.router.navigate(['result']);
    }
/*--Select Option--*/
    selectOption(data, selectedOption){
      data.option.forEach((optn) => {
        optn.selected = true;
      });
      this.quesData = data;
      let id = this.quesData.qid;
      this.userAnswer[id] = selectedOption;
      localStorage.setItem('userAnswer', JSON.stringify(this.userAnswer));
      console.log(JSON.parse(localStorage.getItem('userAnswer')));
    }
  }