import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut, INavbarData } from './nav-helper';
import { navbarData } from './sub-nav-data';
import { activeData } from './active-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [fadeInOut]
})
export class SidenavComponent implements OnInit {
  /* EVENT EMITTERS */
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  /* COMPONENT PROPERTIES */
  collapsed = false;
  screenWidth = 0;

  activeData = activeData;
  navData = navbarData;

  activeParentId: number = 1;
  activeParentName: string = "Main Dashboard";

  isHover: boolean = false;
  subHoverData!: INavbarData;
  
  multiple: boolean = false;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 768) {
      this.collapsed = true;
      this.emitToggleEvent();
      this.setActiveParentNav();
    }
  }

  setActiveParentNav(){
    this.activeParentId = Number(localStorage.getItem("active-nav-id"));

    for (const data of this.activeData) {
      if(data.parentId === this.activeParentId) data.expanded = true;
      else data.expanded = false;
    }
  }
 

  /* WINDOW RESIZE LISTENER */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.emitToggleEvent();
    }
  }

  /* PAGE CLICK LISTENER */
  @HostListener('document:click', ['$event'])
  onClick() {
    if(this.isHover)this.isHover = false;
  }

  /* TOGGLE COLLAPSE */
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.emitToggleEvent();
  }

  /* SET ACTIVE MODULE */
  setActiveModule(data: any): void {
    this.activeParentId = data.parentId;
    localStorage.setItem("active-nav-id", this.activeParentId.toString());

    for (const item of this.activeData) {
      if (item.parentId === this.activeParentId) {
        item.expanded = true;
        this.activeParentName = item.label;
      } else {
        item.expanded = false;
      }
    }
  }

  /* WHEN HOVER TO SUB */
  setHoverSub(data: INavbarData){
    if(!this.collapsed){
      this.isHover = true;
      this.subHoverData = data;
    }
  }

  /* WHEN HOVER ADD STYLE */
  getHoverTabStyles(){
    const styles: any = {};
    const initialValue = 56;
    const SecondValue = 58;

    const matchingNavItem = this.navData.find(nav =>
      nav.childId === this.subHoverData.childId && this.activeParentId === nav.parentId
    );

    if (matchingNavItem && matchingNavItem.childId) {
      styles.marginTop = (initialValue + (matchingNavItem.childId - 1) * SecondValue) + 'px';
    } else {
      styles.marginTop = initialValue + 'px';
    }

    return styles;
  }

  /* CLOSE SIDENAV */
  closeSidenav(): void {
    this.collapsed = false;
    this.emitToggleEvent();
  }

  /* HANDLE CLICK EVENT */
  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded;
  }

  /* GET ACTIVE CLASS */
  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  /* SHRINK ITEMS */
  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for (const modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }

  /* EMIT TOGGLE EVENT */
  private emitToggleEvent(): void {
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
}
