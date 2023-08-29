
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/TokenStorage.service';

@Injectable({
    providedIn: 'root'
})
export class LoginAuthGuardService implements CanActivate {

    constructor(private router: Router,private tokenStorage: TokenStorageService) {}

    canActivate(): boolean {
        if (!(this.isAccessTokenValid() && this.isRefreshTokenValid())) {
            return true;
        }
        this.router.navigateByUrl('/dashBoard');
        return false;
    }

    isAccessTokenValid(): boolean {
        let status = true;
        let token = this.tokenStorage.getToken();
        if (token === null || token === undefined || token === '') (status = false)
        return status;
    }

    isRefreshTokenValid(): boolean {
        let status = true;
        let token = this.tokenStorage.getRefreshToken();
        if (token === null || token === undefined || token === '') (status = false)
        return status;
    }

} 