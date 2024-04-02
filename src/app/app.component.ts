import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular-form';

  constructor(private loadingCtrl: LoadingController){}

  loading: HTMLIonLoadingElement = null;
  async setLoading(){
    if (!this.loading) {
      this.loading = await this.loadingCtrl.create({
        message: 'Loading... (3 sec)',
        showBackdrop: true,
        spinner: "lines"
      });
      console.log(`setLoading: `, this.loading);
    }
  }

  async showLoading() {
    await this.setLoading();
    this.loading.present();
    setTimeout(() => { this.closeLoading(); }, 3000, []);
  }

  async closeLoading() {
    this.loading.dismiss();
    this.loading = null;
  }
}
