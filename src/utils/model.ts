export type KeyValuePair = { key: string, value: string };

export interface BaseModelInterface {
  getDisplayProperties(): KeyValuePair[];
}

export abstract class BaseModel implements BaseModelInterface {
  propertyNamedValues: KeyValuePair[];

  constructor() {
    this.propertyNamedValues = [];
  }

  abstract getDisplayProperties(): KeyValuePair[];

}

export class User extends BaseModel {
  static propertyNames: KeyValuePair[] = [];

  constructor(public name: string) {
    super();
  }

  static initDisplayProperties() {
    User.propertyNames.push({key: "name", value: "用户名"});
  }

  static initFromJsObject(jsObject: any): User {
    let instance = new User(jsObject.name);
    return instance;
  }

  getDisplayProperties(): KeyValuePair[] {
    this.propertyNamedValues = [];
    for (let propertyName of User.propertyNames) {
      this.propertyNamedValues.push({key: propertyName.value, value: this[propertyName.key]});
    }
    return this.propertyNamedValues;
  }
}

User.initDisplayProperties();

export class Tempusers extends BaseModel {
  static propertyNames: KeyValuePair[] = [];

  constructor(public id: string,
              public username: string,
              public psd: string,
              public logincount: number,
              public lastlogin: string,
              public servicescode: string) {
    super();
  }

  static initDisplayProperties() {
    Tempusers.propertyNames.push({key: "id", value: "唯一标识"});
    Tempusers.propertyNames.push({key: "username", value: "用户名"});
    Tempusers.propertyNames.push({key: "psd", value: "密码"});
    Tempusers.propertyNames.push({key: "logincount", value: "登陆次数"});
    Tempusers.propertyNames.push({key: "lastlogin", value: "最近一次登录"});
    Tempusers.propertyNames.push({key: "servicescode", value: "服务码"});
  }

  static initFromJsObject(jsObject: any): Tempusers {
    let instance = new Tempusers(jsObject.id, jsObject.username, jsObject.psd, jsObject.logincount, jsObject.lastlogin, jsObject.servicescode);
    return instance;
  }

  getDisplayProperties(): KeyValuePair[] {
    this.propertyNamedValues = [];
    for (let propertyName of Tempusers.propertyNames) {
      this.propertyNamedValues.push({key: propertyName.value, value: this[propertyName.key]});
    }
    return this.propertyNamedValues;
  }
}
Tempusers.initDisplayProperties();

export class Schoolrolls extends BaseModel {
  static propertyNames: KeyValuePair[] = [];

  constructor(public id: string,
              public studentid: string,
              public name: string,
              public sex: string,
              public nation: string,
              public politicalstatus: string,
              public nativeplace: string,
              public education: string,
              public maritalstatus: string,
              public personid: string,
              public learncenterid: string,
              public department: string,
              public subject: string,
              public classname: string,
              public trainschemid: string,
              public startyear: string,
              public startterm: string,
              public schoolrollsstatus: string,
              public contact: string,
              public postaladdress: string,
              public postalcode: string,
              public verifystatus: string,
              public verifyfaieldreason56: string,
              public birthday: string,
              public ds: string) {
    super();
  }

  static initDisplayProperties() {
    Schoolrolls.propertyNames.push({key: "id", value: "用户名"});
    Schoolrolls.propertyNames.push({key: "studentid", value: "密码"});
    Schoolrolls.propertyNames.push({key: "name", value: "登陆次数"});
    Schoolrolls.propertyNames.push({key: "sex", value: "最近一次登录"});
    Schoolrolls.propertyNames.push({key: "nation", value: "服务码"});
    Schoolrolls.propertyNames.push({key: "politicalstatus", value: "服务码"});
  }

  static initFromJsObject(jsObject: any): Schoolrolls {
    let instance = new Schoolrolls(jsObject.id, jsObject.studentid, jsObject.name, jsObject.sex, jsObject.nation, jsObject.politicalstatus, jsObject.nativeplace, jsObject.education, jsObject.maritalstatus, jsObject.personid, jsObject.learncenterid, jsObject.department, jsObject.subject, jsObject.classname, jsObject.trainschemid, jsObject.startyear, jsObject.startterm, jsObject.schoolrollsstatus, jsObject.contact, jsObject.postaladdress, jsObject.postalcode, jsObject.verifystatus, jsObject.verifyfaieldreason56, jsObject.birthday, jsObject.ds);
    return instance;
  }

  getDisplayProperties(): KeyValuePair[] {
    this.propertyNamedValues = [];
    for (let propertyName of Schoolrolls.propertyNames) {
      this.propertyNamedValues.push({key: propertyName.value, value: this[propertyName.key]});
    }
    return this.propertyNamedValues;
  }
}
Schoolrolls.initDisplayProperties();


export class SchoolroolsCount extends BaseModel {
  static propertyNames: KeyValuePair[] = [];

  constructor(public total: string) {
    super()
  }

  static initDisplayProperties() {
    SchoolroolsCount.propertyNames.push({key: "total", value: "总人数"});
  }

  static initFromJsObject(jsObject: any): PersonsOfStartYearAndSubject {
    let instance = new PersonsOfStartYearAndSubject(jsObject.startYear, jsObject.subject, jsObject.numberOfPersons);
    return instance;
  }

  getDisplayProperties(): KeyValuePair[] {
    this.propertyNamedValues = [];
    for (let propertyName of SchoolroolsCount.propertyNames) {
      this.propertyNamedValues.push({key: propertyName.value, value: this[propertyName.key]});
    }
    return this.propertyNamedValues;
  }

}
SchoolroolsCount.initDisplayProperties();


export class PersonsOfStartYearAndSubject extends BaseModel {
  static propertyNames: KeyValuePair[] = [];

  constructor(public startYear: string, public subject: string, public numberOfPersons: string) {
    super()
  }

  static initDisplayProperties() {
    PersonsOfStartYearAndSubject.propertyNames.push({key: "startYear", value: "入学年份"});
    PersonsOfStartYearAndSubject.propertyNames.push({key: "subject", value: "专业"});
    PersonsOfStartYearAndSubject.propertyNames.push({key: "numberOfPersons", value: "人数"});
  }

  static initFromJsObject(jsObject: any): PersonsOfStartYearAndSubject {
    let instance = new PersonsOfStartYearAndSubject(jsObject.startYear, jsObject.subject, jsObject.numberOfPersons);
    return instance;
  }

  getDisplayProperties(): KeyValuePair[] {
    this.propertyNamedValues = [];
    for (let propertyName of PersonsOfStartYearAndSubject.propertyNames) {
      this.propertyNamedValues.push({key: propertyName.value, value: this[propertyName.key]});
    }
    return this.propertyNamedValues;
  }

}
PersonsOfStartYearAndSubject.initDisplayProperties();


export class PersonsOfSubject extends BaseModel {
  static propertyNames: KeyValuePair[] = [];

  constructor(public subject: string, public numberOfPersons: string) {
    super()
  }

  static initDisplayProperties() {
    PersonsOfSubject.propertyNames.push({key: "subject", value: "专业"});
    PersonsOfSubject.propertyNames.push({key: "numberOfPersons", value: "人数"});
  }

  static initFromJsObject(jsObject: any): PersonsOfStartYearAndSubject {
    let instance = new PersonsOfStartYearAndSubject(jsObject.startYear, jsObject.subject, jsObject.numberOfPersons);
    return instance;
  }

  getDisplayProperties(): KeyValuePair[] {
    this.propertyNamedValues = [];
    for (let propertyName of PersonsOfSubject.propertyNames) {
      this.propertyNamedValues.push({key: propertyName.value, value: this[propertyName.key]});
    }
    return this.propertyNamedValues;
  }

}
PersonsOfSubject.initDisplayProperties();
