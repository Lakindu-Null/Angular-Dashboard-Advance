import { Component } from '@angular/core';
import { CommonFuntion } from './common/CommonFuntion';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSideNavCollapsed = false;
  screenWidth = 0;

  isDashboardVisible() {
    return CommonFuntion.isDashboardVisible;
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
