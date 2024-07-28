import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../../providers/authentication.service'

@Component({
  selector: 'app-register',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

userData = { "first_name": "", "last_name": "", "email": "", "password": "","password2":"",};
responseData:any;
email2:any;


  constructor(private authService: AuthenticationService,
              private toastCtrl: ToastController,
              private loadCtrl: LoadingController,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

  register() {
    
    this.authService.createUser(this.userData).then(async (result) => {
      console.log(result)
      
        let toast = await this.toastCtrl.create({
          message: 'Se ha registrado correctamente',
          duration: 3000,
          color: "success",
        });
        toast.present();
        let load = await this.loadCtrl.create({
          message: 'Cargando complementos...',
          spinner:'crescent',
          duration:3000
        });
         await load.present();

        let userData:any = this.userData
        userData["username"] = this.userData.email
        this.authService.postData(this.userData).then( (result) => {
          this.responseData = result;
          console.log(this.responseData);
          localStorage.setItem('userData', JSON.stringify(this.responseData));
          this.navCtrl.navigateForward('/tabs/home')

          }, (err) => {
         console.log(err);
        });
  }, async (err) => {
           let toast = await this.toastCtrl.create({
            message: 'Por favor complete verifique que ingreso todos los datos',
            duration: 5000,
            color: "danger",
          });
          toast.present();
        });
  }

}
