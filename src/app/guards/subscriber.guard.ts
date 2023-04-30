import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AfService } from "../providers/af.service";
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriberGuard implements CanActivate {
  constructor(private af: AfService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.af.user$.pipe(
      take(1),
      map(user => !!(user && user.roles.subscriber)),
      tap(isAdmin => {
        if(!isAdmin) {
          console.error("Access denied - Subscribers only allowed");
        }
      })
    )
  }
}
