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
          optionId: 1,
          optionText: 110,
          isRight: false,
          selected: false
        },
        {
          optionId: 2,
          optionText: 90,
          isRight: true,
          selected: false
        },
        {
          optionId: 3,
          optionText: 100,
          isRight: false,
          selected: false
        },
        {
          optionId: 4,
          optionText: 120,
          isRight: false,
          selected: false
        }
      ]
  },
  {
      qid: 2,
      qusTitle: ' What is the Substraction of? ',
      qusSubTitle: 34 + '-' + 22,
      option: [
        {
          optionId: 1,
          optionText: 12,
          isRight: true,
          selected: false
        },
        {
          optionId: 2,
          optionText: 46,
          isRight: false,
          selected: false
        },
        {
          optionId: 3,
          optionText: 10,
          isRight: false,
          selected: false
        },
        {
          optionId: 4,
          optionText: 15,
          isRight: false,
          selected: false
        }
      ]
  },
  {
      qid: 3,
      qusTitle: ' What is the Multiplication of? ',
      qusSubTitle: 25 + '*' + 5,
      option: [
        {
          optionId: 1,
          optionText: 102,
          isRight: false,
          selected: false
        },
        {
          optionId: 2,
          optionText: 116,
          isRight: false,
          selected: false
        },
        {
          optionId: 3,
          optionText: 115,
          isRight: false,
          selected: false
        },
        {
          optionId: 4,
          optionText: 125,
          isRight: true,
          selected: false
        }
      ]
  },
  {
    qid: 4,
      qusTitle: ' What is the Division of? ',
      qusSubTitle: 40 + '/' + 8,
      option: [
        {
          optionId: 1,
          optionText: 8,
          isRight: false,
          selected: false
        },
        {
          optionId: 2,
          optionText: 5,
          isRight: true,
          selected: false
        },
        {
          optionId: 3,
          optionText: 10,
          isRight: false,
          selected: false
        },
        {
          optionId: 4,
          optionText: 6,
          isRight: false,
          selected: false
        }
      ]
  },
  {
    qid: 5,
    qusTitle: ' What is the Sum of? ',
    qusSubTitle: 77 + '+' + 13,
    option: [
      {
        optionId: 1,
        optionText: 90,
        isRight: true,
        selected: false
      },
      {
        optionId: 2,
        optionText: 107,
        isRight: false,
        selected: false
      },
      {
        optionId: 3,
        optionText: 89,
        isRight: false,
        selected: false
      },
      {
        optionId: 4,
        optionText: 85,
        isRight: false,
        selected: false
      }
    ]
  },
  {
    qid: 6,
    qusTitle: ' What is the Substraction of? ',
    qusSubTitle: 56 + '-' + 27,
    option: [
      {
        optionId: 1,
        optionText: 17,
        isRight: false,
        selected: false
      },
      {
        optionId: 2,
        optionText: 32,
        isRight: false,
        selected: false
      },
      {
        optionId: 3,
        optionText: 29,
        isRight: true,
        selected: false
      },
      {
        optionId: 4,
        optionText: 43,
        isRight: false,
        selected: false
      }
    ]
  },
  {
    qid: 7,
    qusTitle: ' What is the Multiplication of? ',
    qusSubTitle: 45 + '*' + 5,
    option: [
      {
        optionId: 1,
        optionText: 205,
        isRight: false,
        selected: false
      },
      {
        optionId: 2,
        optionText: 216,
        isRight: false,
        selected: false
      },
      {
        optionId: 3,
        optionText: 245,
        isRight: false,
        selected: false
      },
      {
        optionId: 4,
        optionText: 225,
        isRight: true,
        selected: false
      }
    ]
},
{
  qid: 8,
    qusTitle: ' What is the Division of? ',
    qusSubTitle: 85 + '/' + 5,
    option: [
      {
        optionId: 1,
        optionText: 28,
        isRight: false,
        selected: false
      },
      {
        optionId: 2,
        optionText: 17,
        isRight: true,
        selected: false
      },
      {
        optionId: 3,
        optionText: 15,
        isRight: false,
        selected: false
      },
      {
        optionId: 4,
        optionText: 16,
        isRight: false,
        selected: false
      }
    ]
},
{
  qid: 9,
  qusTitle: ' What is the Sum of? ',
  qusSubTitle: 182 + '+' + 301,
  option: [
    {
      optionId: 1,
      optionText: 483,
      isRight: true,
      selected: false
    },
    {
      optionId: 2,
      optionText: 465,
      isRight: false,
      selected: false
    },
    {
      optionId: 3,
      optionText: 498,
      isRight: false,
      selected: false
    },
    {
      optionId: 4,
      optionText: 504,
      isRight: false,
      selected: false
    }
  ]
},
{
    qid: 10,
    qusTitle: ' What is the Division of? ',
    qusSubTitle: 162 + '/' + 9,
    option: [
      {
        optionId: 1,
        optionText: 8,
        isRight: false,
        selected: false
      },
      {
        optionId: 2,
        optionText: 17,
        isRight: false,
        selected: false
      },
      {
        optionId: 3,
        optionText: 22,
        isRight: false,
        selected: false
      },
      {
        optionId: 4,
        optionText: 18,
        isRight: true,
        selected: false
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