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

  login() { }

  async registro() {
    await this.presentLoading();
    try {
      await this.authService.registro(this.UserRegistro);
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }

  }

  async presentLoading() {
    this.loading = await this.loadingController.create({ message: 'Por favor, Aguarde...' });
    return this.loading.present();

  }
}
