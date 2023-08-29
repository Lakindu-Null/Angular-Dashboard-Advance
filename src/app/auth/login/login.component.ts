import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonFuntion } from 'src/app/common/CommonFuntion';
import { Authenticatorservice } from '../services/authentication.service';
import { TokenStorageService } from 'src/app/TokenStorage.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: any;
  checked: boolean = false;
  isLoading: boolean = false;

  constructor(
    private router : Router,
    private formBuilder: FormBuilder, 
    private tokenStorage: TokenStorageService,
    private authenticateService: Authenticatorservice
  ){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
    this.validateLogin();
  }

  validateLogin(){
    CommonFuntion.isDashboardVisible = false;
  }

  userLogin(){
    this.authenticateService.authenticate(this.loginForm.value)
      .subscribe(
        {
          next: (response: any) => {
            if (response.status == 200) (this.userAuhrnticated(response))
            else (this.authenticateError(response.errormsg))
          },
          error: () => this.authenticateError('Connection error try again'),
          complete: () => this.isLoading = false
        }
    );
  }

  userAuhrnticated(result: any) {
    if (result.userStatus) {
      
      this.tokenStorage.saveToken(result.accesstoken);
      this.tokenStorage.saveRefreshToken(result.refreshToken);
      this.setupClientAndUser();
      this.setUserDetails(result);
      CommonFuntion.isDashboardVisible = true;
      this.router.navigateByUrl('dashboard');
    } else {
      console.log("Inactive User", 'Warning');
    }
  }

  setUserDetails(result: any) {
    CommonFuntion.loggedIn = true;
    CommonFuntion.userPolicy=result.policy;
    CommonFuntion.branchId=result.branchId;
    CommonFuntion.accountType=result.userType;
    CommonFuntion.company=result.company;    
    console.log('br id '+CommonFuntion.branchId);
  }

  setupClientAndUser() {
    let token: any = this.tokenStorage.getToken();
    if (token) {
      let decodedToken: any = jwt_decode(token);
      CommonFuntion.userName=decodedToken.sub;
      console.log('userName '+CommonFuntion.userName);
    }
  }

  authenticateError(response: any) {
    this.isLoading = false;
    console.log(response, 'Warning');
  }
}
