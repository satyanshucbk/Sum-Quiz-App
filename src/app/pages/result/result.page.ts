import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  imgUrl: string;
  userFullName: string;
  userData: any;
  score : number;
  goBackQuiz() {
     this.router.navigate(['quiz']);
  }

  constructor(public router: Router) { }

  ngOnInit() {
    this.imgUrl = 'assets/images/Slider/img' + localStorage.getItem('imageId') + '.png';
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.userFullName = this.userData.firstName + ' ' + this.userData.lastname;
    this.calculateScore();
  }

  calculateScore(){
    let userAnswer = JSON.parse(localStorage.getItem('userAnswer'));
    let count = 0;
    for(let index in userAnswer){
      if(userAnswer[index]){
        count++;
      }
      
    }
    console.log(userAnswer);
    this.score = count;
  }
}