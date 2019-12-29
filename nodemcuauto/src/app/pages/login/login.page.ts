import { AuthService } from './../../services/auth.service';
import { User } from './../../inferfaces/user';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public UserLogin: User = {};
  public UserRegistro: User = {};
  public loading: any;

  constructor(
    public Keyboard: Keyboard,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.UserLogin);
    } catch (error) {
      let message: string;

      switch (error.code) {
        case "auth/argument-error":
          message = "Email e Senha em branco";
          break;

        case "auth/invalid-email":
          message = "Email invalido";
          break;

        case "auth/email-already-in-use":
          message = "Email já cadastrado";
          break;

        case "auth/weak-password":
          message = "Senha em branco";
          break;
      }
      this.presentToast(message);
    } finally {
      this.loading.dismiss();
    }

  }

  async registro() {
    await this.presentLoading();

    try {
      await this.authService.registro(this.UserRegistro);
    } catch (error) {
      let message: string;

      switch (error.code) {
        case "auth/argument-error":
          message = "Email e Senha em branco";
          break;

        case "auth/invalid-email":
          message = "Email invalido";
          break;

        case "auth/email-already-in-use":
          message = "Email já cadastrado";
          break;

        case "auth/weak-password":
          message = "Senha em branco";
          break;
      }
      this.presentToast(message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({ message: 'Por favor, Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: "warning",
      position: 'top',
    });
    toast.present();
  }
}
