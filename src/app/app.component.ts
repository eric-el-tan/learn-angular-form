import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular-form';

  constructor(private loadingCtrl: LoadingController){
    this.analysePerformance();
  }

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

  /**
   * show PerformanceResourceTiming
   */
  analysePerformance () {
    let resourceList = window.performance.getEntriesByType('resource');
    // let filteredResourceList = resourceList.filter(
    //   (resource:any) =>{  return resource['initiatorType'].includes('xmlhttprequest'); }
    // );
    // filteredResourceList.forEach((entry:any)=>{
    //   console.log(`xmlhttprequest: ${entry.name}: ${entry.duration} ms / ${entry["decodedBodySize"]} bytes`);
    // })
    resourceList.forEach((entry:any)=>{
      console.log(entry);
      console.log(`${entry.initiatorType}: ${entry.name}: ${entry.duration} ms / ${entry["decodedBodySize"]} bytes`);
    })
  }
}
