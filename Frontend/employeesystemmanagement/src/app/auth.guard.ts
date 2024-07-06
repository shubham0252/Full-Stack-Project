import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const isLoggedIn = !!localStorage.getItem('jwt'); // Check if JWT is stored

  if (!isLoggedIn) {
    alert("Please login, redirecting to login!");
    _router.navigate(['login']);
    return false;
  }
  return true;
};