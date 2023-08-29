import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './common/body/body.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { SublevelMenuComponent } from './common/sidenav/sub-level-menu.component';
import { TopbarComponent } from './common/topbar/topbar.component';
import { DropdownModule } from 'primeng/dropdown';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { authInterceptorProviders } from './AuthInterceptor';
import { Authenticatorservice } from './auth/services/authentication.service';
import { ModuleAuthGuard } from './auth/services/module-auth-guard.service';
import { AuthService } from './auth/services/AuthService';
import { LoginAuthGuardService } from './auth/services/login-auth-guard.service';
import { TokenStorageService } from './TokenStorage.service';
import { DashBoardAuthGuardService } from './auth/services/dashboard-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    SublevelMenuComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule,
    BadgeModule,
    TooltipModule
  ],
  providers: [
    authInterceptorProviders,
    Authenticatorservice,
    DashBoardAuthGuardService,
    ModuleAuthGuard,
    AuthService,
    LoginAuthGuardService,
    TokenStorageService ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
