import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout'

/*
  Generated class for the SchoolRollService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SchoolRollService {
  baseUrl = "http://softdev.cmxy.ynou.edu.cn:8080";
  schoolRollCountPath = "/schoolrools/count";
  schoolRollListPath = "/schoolrools/list";
  schoolRollPersonsOfStartYearAndSubjectPath = "/schoolrools/startyear/subject/persons/";
  schoolRollPersonsOfSubjectPath = "/schoolrools/subject/persons";
  schoolRollSchoolrollsPath = "/schoolrools/studentid";

  constructor(public http: Http) {
    console.log('Hello SchoolRollService Provider');
  }

  loadRollCount() {
    return new Promise(resolve => {
      let data = {
        total: 5
      };
      resolve(data);
    });
  }


  loadRollRollsLimited(count: Number) {
    return new Promise(resolve => {
      let data = [
        {id: 1, studentId: 1, name: "name1", sex: "male", nation: "China"},
        {id: 2, studentId: 2, name: "name2", sex: "male", nation: "China"},
        {id: 3, studentId: 3, name: "name3", sex: "male", nation: "China"},
        {id: 4, studentId: 4, name: "name4", sex: "male", nation: "China"},
        {id: 5, studentId: 5, name: "name5", sex: "male", nation: "China"},
      ]
      resolve(data);
    });
  }


}
