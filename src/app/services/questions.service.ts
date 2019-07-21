import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  qusData= [
    {
      qid:1,
      qusTitle: "What is the Sum of",
      qusSubTitle: 80+'+'+10,
      option:[10,30,90,100],
      correctAns: 90
   },
   {
     qid:2,
     qusTitle: "What is the Sum of",
     qusSubTitle: 40+'+'+50,
     option:[25,90,70,80],
     correctAns: 90
   },
   {
    qid:3,
    qusTitle: "What is the Sum of",
    qusSubTitle: 30+'+'+50,
    option:[25,90,70,80],
    correctAns: 80
  },
  {
    qid:4,
    qusTitle: "What is the Sum of",
    qusSubTitle: 32+'+'+42,
    option:[25,74,70,80],
    correctAns: 74
  },
  {
    qid:5,
    qusTitle: "What is the Sum of",
    qusSubTitle: 33+'+'+74,
    option:[107,90,70,80],
    correctAns: 107
  },
  {
    qid:6,
    qusTitle: "What is the Sum of",
    qusSubTitle: 25+'+'+25,
    option:[25,90,70,50],
    correctAns: 50
  }
]
getQuestions(index){
 return this.qusData[index];
}

getQuestionById(id){
 let  index =  this.qusData.findIndex((question)=>question.qid===id);
 return this.qusData[index];
}
}
