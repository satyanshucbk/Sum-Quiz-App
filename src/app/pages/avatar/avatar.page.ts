import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  imgData = [
    {
      id: 1,
      url: 'assets/images/Slider/img1.png'
    },
      {
        id: 2,
        url: 'assets/images/Slider/img2.png'
      },
      {
        id: 3,
        url: 'assets/images/Slider/img3.png'
      },
      {
        id: 4,
        url: 'assets/images/Slider/img4.png'
      },
      {
        id: 5,
        url: 'assets/images/Slider/img5.png'
      },
      {
        id: 6,
        url: 'assets/images/Slider/img6.png'
      },
      {
        id: 7,
        url: 'assets/images/Slider/img7.png'
      }

  ]


  constructor(public router: Router, public navCtrl: NavController) { }
   sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.8,
    effect: 'flip',
  };

ngOnInit() { }


getIndex(imageId) {
  localStorage.setItem('imageId',imageId);
  console.log(localStorage.getItem("imageId"));
  this.router.navigate(['quiz']);
  }


goBackStart() {
    this.router.navigate(['home'])
  }

}
