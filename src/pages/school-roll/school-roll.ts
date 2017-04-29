import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InfoSearch} from "../info-search/info-search";

/**
 * Generated class for the SchoolRoll page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-school-roll',
  templateUrl: 'school-roll.html',
})
export class SchoolRoll {

  items: Array<{ operationName: string, title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { operationName: "loadSchoolRollsLimited", title: "获取学生信息", component: InfoSearch},
      { operationName: "loadPersonsOfStartYearAndSubject", title: "获取指定专业人数", component: InfoSearch},
      { operationName: "loadPersonsOfSubject", title: "获取学生数的数据", component: InfoSearch},
      { operationName: "loadSchoolRollsByStudentId", title: "按学号查找学籍", component: InfoSearch},
      { operationName: "loadSchoolRollsByName", title: "按姓名查找学籍", component: InfoSearch},
    ]
  }

  itemSelected(item) {
    this.navCtrl.push(item.component, {
      item: item,
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolRoll');
  }

}
