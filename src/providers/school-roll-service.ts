import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout'
import {PersonsOfStartYearAndSubject, PersonsOfSubject, Schoolrolls, Tempusers} from "../utils/model";

@Injectable()
export class SchoolRollService {
  baseUrl = "http://softdev.cmxy.ynou.edu.cn:8080";
  schoolRollCountPath = "/schoolrools/count";
  schoolRollListPath = "/schoolrools/list";
  schoolRollPersonsOfStartYearAndSubjectPath = "/schoolrools/startyear/subject/persons/";
  schoolRollPersonsOfSubjectPath = "/schoolrools/subject/persons";
  schoolRollSchoolrollsByStudentIdPath = "/schoolrools/studentid";
  schoolRollSchoolrollsByNamePath = "/schoolrools/name";

  schoolRollLimitedData : Schoolrolls[];
  schoolRollPersonsOfStartYearAndSubject: PersonsOfStartYearAndSubject[];
  schoolRollPersonsOfSubject: PersonsOfSubject[];
  schoolRollByStudentId : Schoolrolls[];
  schoolRollByName : Schoolrolls[];

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


  loadSchoolRollsLimited(count: number) {
    return Observable.create(observer => {
      this.http.get(this.baseUrl + this.schoolRollListPath + "/" + count)
        .timeout(3000)
        .map(res => res.json())
        .subscribe(
          res => {
              this.schoolRollLimitedData = res.map(jsObject => {
                return Schoolrolls.initFromJsObject(jsObject);
              });
              observer.next(true);
              observer.complete();
          },
          err => {
            this.schoolRollLimitedData = null;
            observer.next(false);
            observer.complete();
            console.error(err);
          },
          () => {
            console.log('done');
          });
    });
  }



  loadPersonsOfStartYearAndSubject(ds: number, year: number, rows: number) {
    return Observable.create(observer => {
      this.http.get(this.baseUrl + this.schoolRollPersonsOfStartYearAndSubjectPath + "/" + ds + "/" + year + "/" + rows)
        .timeout(3000)
        .map(res => res.json())
        .subscribe(
          res => {
            this.schoolRollPersonsOfStartYearAndSubject = res.map(jsObject => {
              return PersonsOfStartYearAndSubject.initFromJsObject(jsObject);
            });
            observer.next(true);
            observer.complete();
          },
          err => {
            this.schoolRollPersonsOfStartYearAndSubject = null;
            observer.next(false);
            observer.complete();
            console.error(err);
          },
          () => {
            console.log('done');
          });
    });
  }



  loadPersonsOfSubject(ds: string, rows: number) {
    return Observable.create(observer => {
      this.http.get(this.baseUrl + this.schoolRollPersonsOfSubjectPath + "/" + ds + "/" + rows)
        .timeout(3000)
        .map(res => res.json())
        .subscribe(
          res => {
            this.schoolRollPersonsOfSubject = res.map(jsObject => {
              return PersonsOfSubject.initFromJsObject(jsObject);
            });
            observer.next(true);
            observer.complete();
          },
          err => {
            this.schoolRollPersonsOfSubject = null;
            observer.next(false);
            observer.complete();
            console.error(err);
          },
          () => {
            console.log('done');
          });
    });
  }



  loadSchoolRollsByStudentId(studentId: string) {
    return Observable.create(observer => {
      this.http.get(this.baseUrl + this.schoolRollSchoolrollsByStudentIdPath + "/" + studentId)
        .timeout(3000)
        .map(res => res.json())
        .subscribe(
          res => {
            this.schoolRollByStudentId = res.map(jsObject => {
              return Schoolrolls.initFromJsObject(jsObject);
            });
            observer.next(true);
            observer.complete();
          },
          err => {
            this.schoolRollByStudentId = null;
            observer.next(false);
            observer.complete();
            console.error(err);
          },
          () => {
            console.log('done');
          });
    });
  }



  loadSchoolRollsByName(name: string) {
    return Observable.create(observer => {
      this.http.get(this.baseUrl + this.schoolRollSchoolrollsByNamePath + "/" + name)
        .timeout(3000)
        .map(res => res.json())
        .subscribe(
          res => {
            this.schoolRollByName = res.map(jsObject => {
              return Schoolrolls.initFromJsObject(jsObject);
            });
            observer.next(true);
            observer.complete();
          },
          err => {
            this.schoolRollByName = null;
            observer.next(false);
            observer.complete();
            console.error(err);
          },
          () => {
            console.log('done');
          });
    });
  }

}
