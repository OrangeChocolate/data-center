import {Component, ViewChild} from '@angular/core';
import {Platform, MenuController, Nav, NavController} from 'ionic-angular';
import {AuthService} from '../../providers/auth-service';
import {LoginPage} from "../login/login";
import {SchoolRoll} from "../school-roll/school-roll";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from '@ionic-native/splash-screen';
import {Help} from "../help/help";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = SchoolRoll;
  pages: Array<{ title: string, component: any }>;

  username = '';
  email = '';

  constructor(private navCtrl: NavController, private auth: AuthService,
              public platform: Platform,
              public menu: MenuController,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
    this.initialization();
    this.pages = [
      {title: "SchoolRoll", component: SchoolRoll},
      {title: "Help", component: Help},
    ]
  }

  public logout() {
    this.menu.close();
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(LoginPage)
    });
  }

  private initialization() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
