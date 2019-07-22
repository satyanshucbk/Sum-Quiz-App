import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

constructor() { }

  qusData = [
    {
      qid: 1,
      qusTitle: ' What is the Sum of? ',
      qusSubTitle: 80 + '+' + 10,
      option: [
        {
          optionText: 110,
          isRight: false
        },
        {
          optionText: 90,
          isRight: true
        },
        {
          optionText: 100,
          isRight: false
        },
        {
          optionText: 120,
          isRight: false
        }
      ]
  },
  {
      qid: 2,
      qusTitle: ' What is the Substraction of? ',
      qusSubTitle: 34 + '-' + 22,
      option: [
        {
          optionText: 12,
          isRight: true
        },
        {
          optionText: 46,
          isRight: false
        },
        {
          optionText: 10,
          isRight: false
        },
        {
          optionText: 15,
          isRight: false
        }
      ]
  },
  {
      qid: 3,
      qusTitle: ' What is the Multiplication of? ',
      qusSubTitle: 25 + '*' + 5,
      option: [
        {
          optionText: 102,
          isRight: false
        },
        {
          optionText: 116,
          isRight: false
        },
        {
          optionText: 115,
          isRight: false
        },
        {
          optionText: 125,
          isRight: true
        }
      ]
  },
  {
    qid: 4,
      qusTitle: ' What is the Division of? ',
      qusSubTitle: 40 + '/' + 8,
      option: [
        {
          optionText: 8,
          isRight: false
        },
        {
          optionText: 5,
          isRight: true
        },
        {
          optionText: 10,
          isRight: false
        },
        {
          optionText: 6,
          isRight: false
        }
      ]
  },
  {
    qid: 5,
    qusTitle: ' What is the Sum of? ',
    qusSubTitle: 77 + '+' + 13,
    option: [
      {
        optionText: 90,
        isRight: true
      },
      {
        optionText: 107,
        isRight: false
      },
      {
        optionText: 89,
        isRight: false
      },
      {
        optionText: 85,
        isRight: false
      }
    ]
  },
  {
    qid: 6,
    qusTitle: ' What is the Substraction of? ',
    qusSubTitle: 56 + '-' + 27,
    option: [
      {
        optionText: 17,
        isRight: false
      },
      {
        optionText: 32,
        isRight: false
      },
      {
        optionText: 29,
        isRight: true
      },
      {
        optionText: 43,
        isRight: false
      }
    ]
  },
  {
    qid: 7,
    qusTitle: ' What is the Multiplication of? ',
    qusSubTitle: 45 + '*' + 5,
    option: [
      {
        optionText: 205,
        isRight: false
      },
      {
        optionText: 216,
        isRight: false
      },
      {
        optionText: 245,
        isRight: false
      },
      {
        optionText: 225,
        isRight: true
      }
    ]
},
{
  qid: 8,
    qusTitle: ' What is the Division of? ',
    qusSubTitle: 85 + '/' + 5,
    option: [
      {
        optionText: 28,
        isRight: false
      },
      {
        optionText: 17,
        isRight: true
      },
      {
        optionText: 15,
        isRight: false
      },
      {
        optionText: 16,
        isRight: false
      }
    ]
},
{
  qid: 9,
  qusTitle: ' What is the Sum of? ',
  qusSubTitle: 182 + '+' + 301,
  option: [
    {
      optionText: 483,
      isRight: true
    },
    {
      optionText: 465,
      isRight: false
    },
    {
      optionText: 498,
      isRight: false
    },
    {
      optionText: 504,
      isRight: false
    }
  ]
},
{
    qid: 10,
    qusTitle: ' What is the Division of? ',
    qusSubTitle: 162 + '/' + 9,
    option: [
      {
        optionText: 8,
        isRight: false
      },
      {
        optionText: 17,
        isRight: false
      },
      {
        optionText: 22,
        isRight: false
      },
      {
        optionText: 18,
        isRight: true
      }]
}];

getQuestions(index) {
  return this.qusData[index];
 }

 getQuestionById(id) {
  const  index =  this.qusData.findIndex((question) => question.qid === id);
  return this.qusData[index];
 }
}