import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;
  userData: any;

  error_message = {
    'firstname': [
      {type: 'required', message: '*first Name is required'},
      {type: 'minlength', message: '*first Name must be longer or equal than 3 characters.'},
      {type: 'maxlength', message: '*first Name must be lower or equal to 12 characters.'},
      { type: 'pattern', message: '*please enter a valid name.'}
    ],
    'lastname': [
      {type: 'required', message: '*last Name is required'},
      {type: 'minlength', message: '*last Name must be longer or equal than 3 characters.'},
      {type: 'maxlength', message: '*last Name must be lower or equal to 12 characters.'},
    ],
    'gender': [
      {type: 'required', message: '*Select at least on option'},
    ],
    'age': [
      {type: 'required', message: '*enter your age!'},
      {type: 'min', message: '*age should be greater than 0'},
    ],
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
              public alertController: AlertController ,
              public formBuilder: FormBuilder,
              public storage: Storage,
              public router: Router) { 
   
    this.signupForm = this.formBuilder.group({
      firstname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(12),
       Validators.pattern('^[a-zA-Z ]*$')
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(12),
        Validators.pattern('^[a-zA-Z ]*$')
      ])),
      gender: new FormControl('', Validators.compose([
        Validators.required
      ])),
      age: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1),
      ])),
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

  ngOnInit() {}

  goBackStart(){
    this.router.navigate(['home'])
  }

  login(){
    this.router.navigate(['login'])
  }

 async signup() {
    this.userData = {
      'firstName' : this.signupForm.value.firstname,
      'lastname': this.signupForm.value.lastname,
      'gender': this.signupForm.value.gender,
      'age': this.signupForm.value.age,
      'email': this.signupForm.value.email,
      'password': this.signupForm.value.password
    }

    localStorage.setItem("userData", JSON.stringify(this.userData) );
    console.log(JSON.parse(localStorage.getItem("userData")));

    /*-Loader-*/
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    loading.present();
    setTimeout(() => {
        loading.dismiss();
      }, 2000)

    /*-Alert-*/
    const alert = await this.alertController.create({
      header:'Alert',
      subHeader: '',
      message: 'Registration Completed.',
      buttons:['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);

 }
}
