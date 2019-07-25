import { Component, OnInit ,ViewChildren,QueryList, ElementRef} from '@angular/core';
import { Router ,Event,NavigationEnd} from '@angular/router';
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
 previousSelectedOption : any = {};
 @ViewChildren("optionBtn") optionBtn: QueryList<ElementRef>
 goBackAvatar() {
  this.router.navigate(['avatar']);
}


  constructor(public router: Router,
              private questionsservice: QuestionsService,
              public loadingcontroller: LoadingController
              ) { }

  ngOnInit() {
    this.quesData = [];
    this.router.events
    .subscribe((event:Event) => {
      if (event instanceof NavigationEnd) {
        this.quesData = this.questionsservice.getQuestions(0);
        this.quesData.option.forEach((optn)=>{
          optn.selected = false;
        });
       // console.log("quiz page");
        //console.log(this.quesData);
    }
     
    });
    
  }
/*--Get Next Question--*/
  async getNextQuestion(id) {
    this.quesData = this.questionsservice.getQuestionById(id + 1);
    this.quesData.option.forEach((optn)=>{
      optn.selected = false;
    });
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
    this.quesData = []
    this.quesData = this.questionsservice.getQuestionById(id - 1);
   
   /* let qusid = this.quesData.qid;
   let previousOption = JSON.parse(sessionStorage.getItem('previousOption'));
   if(typeof previousOption[qusid]!='undefined'){
    this.quesData.option.forEach((optn) => {
      //if(optn.isRight)
     // optn.selected = false;
  });
   }
   this.optionBtn.forEach((btn)=>{
     
    // btn.nativeElement.i
     //console.log(btn.nativeElement.style.backgroundColor);
     let btnid = btn.nativeElement.id;
     let btnId = btnid.split('_');
     if(btnId[1]==previousOption[qusid] && btnId[2]==qusid){
       btn.nativeElement.click();
       console.log(btnId);
       btn.nativeElement.class = "success";
     }
   })
*/
 // console.log(JSON.parse(sessionStorage.getItem('previousOption')));
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
    getSubmit(id) {
      this.router.navigate(['result']);
    }
/*--Select Option--*/
    selectOption(data, selectedOption,optionId) {
      data.option.forEach((optn) => {
        //if(optn.isRight)
        optn.selected = true;
    });
    
      this.quesData = data;
      let id = this.quesData.qid;
      this.userAnswer[id] = selectedOption;
      this.previousSelectedOption[id] = optionId;
      localStorage.setItem('userAnswer', JSON.stringify(this.userAnswer));
      //sessionStorage.setItem('previousOption', JSON.stringify(this.previousSelectedOption));
     console.log(JSON.parse(localStorage.getItem('userAnswer')));
    }

  }