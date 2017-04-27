import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout'

export class Tempusers {
  constructor(id: number, username: string, psd: string, logincount: number, lastlogin: string, servicescode: string) {
  }
}

export class Schoolrolls {
  constructor(id: string,
              studentid: string,
              name: string,
              sex: string,
              nation: string,
              politicalstatus: string,
              nativeplace: string,
              education: string,
              maritalstatus: string,
              personid: string,
              learncenterid: string,
              department: string,
              subject: string,
              classname: string,
              trainschemid: string,
              startyear: string,
              startterm: string,
              schoolrollsstatus: string,
              contact: string,
              postaladdress: string,
              postalcode: string,
              verifystatus: string,
              verifyfaieldreason56: string,
              birthday: string,
              ds: string) {
  }
}

@Injectable()
export class SchoolRollService {
  baseUrl = "http://softdev.cmxy.ynou.edu.cn:8080";
  schoolRollCountPath = "/schoolrools/count";
  schoolRollListPath = "/schoolrools/list";
  schoolRollPersonsOfStartYearAndSubjectPath = "/schoolrools/startyear/subject/persons/";
  schoolRollPersonsOfSubjectPath = "/schoolrools/subject/persons";
  schoolRollSchoolrollsPath = "/schoolrools/studentid";

  schoolRollLimitedData : Array<Tempusers>;
  schoolRollPersonsOfStartYearAndSubject: Array<any>;

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


  loadSchoolRollsLimited(count: Number) {
    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
      // let access = (credentials.password === "pass" && credentials.email === "email");
      this.http.get(this.baseUrl + this.schoolRollListPath + "/" + count)
        .timeout(3000)
        .map(res => res.json())
        .subscribe(
          res => {
              this.schoolRollLimitedData = res;
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



  loadPersonsOfStartYearAndSubject(ds: Number, year: Number, rows: Number) {
    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
      // let access = (credentials.password === "pass" && credentials.email === "email");
      this.http.get(this.baseUrl + this.schoolRollPersonsOfStartYearAndSubjectPath + "/" + ds + "/" + year + "/" + rows)
        .timeout(3000)
        .map(res => res.json())
        .subscribe(
          res => {
            this.schoolRollPersonsOfStartYearAndSubject = res;
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

}
