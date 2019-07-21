import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  userData: any;


  error_message = {
    'email': [
      {type: 'required', message: '*email is required'},
      {type: 'minlength', message: '*email must be longer or equal than 6 characters.'},
      {type: 'maxlength', message: '*email must be lower or equal to 25 characters.'},
      { type: 'pattern', message: '*please enter a valid email address.'}
    ],
    'password': [
      {type: 'required', message: '*password is required'},
      {type: 'minlength', message: '*password must be longer or equal than 6 characters.'},
      {type: 'maxlength', message: '*password must be lower or equal to 12 characters.'},
      { type: 'pattern', message: '*password must contain numbers,uppercase and lowercase characters & do not use whitespace.'}
    ]
  }

  constructor(public loadingController: LoadingController,
              public formBuilder: FormBuilder,
              public router: Router,
              public alertController: AlertController) {
      
      this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]))
    });
   }

  ngOnInit() {
  }

  goBackStart(){
    this.router.navigate(['home'])
  }


  signup(){
    this.router.navigate(['signup'])
  }

  async login(){

    this.userData = {
      'email': this.loginForm.value.email,
      'password': this.loginForm.value.password
    }

    localStorage.setItem("userData", JSON.stringify(this.userData));
    console.log(JSON.parse(localStorage.getItem("userData")));
  
    /***Alert Message***/
    // const alert = await this.alertController.create({
    //   header: 'Alert',
    //   message: 'Login Completed.',
    //   buttons: [
    //     {
    //       text: 'OK',
    //       handler: () => {
    //       this.router.navigate(['avatar']);
    //       }
    //     },
    //   ]
    // });

    // await alert.present();
    // let result = await alert.onDidDismiss;
    // console.log(this.userData);

    if (this.userData.email && this.userData.password){
      this.router.navigate(['avatar']);
      // this.userData({email: '', password: ''}); 
    }

    /*-Loader-*/
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    loading.present();
    setTimeout(() => {
        loading.dismiss();
      }, 2000)

  }
}
