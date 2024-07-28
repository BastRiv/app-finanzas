import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

import { AuthenticationService} from '../../providers/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userData = {"username": "","password": ""};
  responseData:any;
  token:any;

  constructor(private navCtrl: NavController,
    private authService: AuthenticationService,
    private toast: ToastController) {  

      this.token = JSON.parse(localStorage.getItem('userData') || '{}').token;
      if(this.token != null) {
        this.navCtrl.navigateRoot('tabs/home')
      }
      
    }


  ngOnInit() {
  }

  login(){
    this.userData["username"] = this.userData["username"]
    this.authService.postData(this.userData).then((result) => {
     this.responseData = result;
     console.log(this.responseData);
     localStorage.setItem('userData', JSON.stringify(this.responseData));
     this.navCtrl.navigateForward('tabs/home')

        

  
   }, async (err) => {
       let toast = await this.toast.create({
         message: 'Usuario y/o contraseña incorrecta',
         duration: 2800,
         color: "danger",

       });
   toast.present();
   });

 }

  register(){
    this.navCtrl.navigateForward('registro')
  }

}
