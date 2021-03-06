import { Component } from '@angular/core';
import {AlertController, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {SchoolRollService} from "../../providers/school-roll-service";
import {InfoDetail} from "../info-detail/info-detail";

/**
 * Generated class for the InfoSearch page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-info-search',
  templateUrl: 'info-search.html',
})
export class InfoSearch {
  item: any;
  operationName: string;
  loading: Loading;
  listData: Array<any>;
  limitedCount: number = 10;
  personsOfStartYearAndSubjectData: any = {ds: "VCOM", year: "2012", rows: 10};
  personsOfSubject: any = {ds: "VCOM", rows: 10};
  schoolrollByStudentId: string = "";
  schoolrollByName: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private  schoolRollService: SchoolRollService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    this.item = navParams.get('item');
    this.operationName = this.item.operationName || "loadSchoolRollsLimited";
  }

  itemSelected(item, operationName) {
    item.operationName = operationName;
    this.navCtrl.push(InfoDetail, {
      item: item,
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoSearch');
  }

  loadSchoolRollsLimited(count: number) {
    this.schoolRollService.loadSchoolRollsLimited(count).subscribe(allowed => {
        if (allowed) {
          this.listData = this.schoolRollService.schoolRollLimitedData;
        } else {
          this.showError("获取数据错误");
        }
      },
      error => {
        this.showError(error);
      });
  }

  loadPersonsOfStartYearAndSubject(ds: number, year: number, rows: number) {
    this.schoolRollService.loadPersonsOfStartYearAndSubject(ds, year, rows).subscribe(allowed => {
        if (allowed) {
          this.listData = this.schoolRollService.schoolRollPersonsOfStartYearAndSubject;
        } else {
          this.showError("获取数据错误");
        }
      },
      error => {
        this.showError(error);
      });
  }

  loadPersonsOfSubject(ds: string, rows: number) {
    this.schoolRollService.loadPersonsOfSubject(ds, rows).subscribe(allowed => {
        if (allowed) {
          this.listData = this.schoolRollService.schoolRollPersonsOfSubject;
        } else {
          this.showError("获取数据错误");
        }
      },
      error => {
        this.showError(error);
      });
  }

  loadSchoolRollsByStudentId(studentId: string) {
    this.schoolRollService.loadSchoolRollsByStudentId(studentId).subscribe(allowed => {
        if (allowed) {
          this.listData = this.schoolRollService.schoolRollByStudentId;
        } else {
          this.showError("获取数据错误");
        }
      },
      error => {
        this.showError(error);
      });
  }

  loadSchoolRollsByName(studentId: string) {
    this.schoolRollService.loadSchoolRollsByName(studentId).subscribe(allowed => {
        if (allowed) {
          this.listData = this.schoolRollService.schoolRollByName;
        } else {
          this.showError("获取数据错误");
        }
      },
      error => {
        this.showError(error);
      });
  }




  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
