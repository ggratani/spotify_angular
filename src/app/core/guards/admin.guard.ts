import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {}

  isAdmin(): any {
    const userRole = this.cookieService.get('role'); 
    return userRole
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.isAdmin() === "admin") {      
      return true; 
    } else {
      this.router.navigate(['/tracks']); 
      return false;
    }
  }
}
