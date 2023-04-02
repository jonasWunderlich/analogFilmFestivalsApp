import { inject } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const auth = inject(AuthService);

  if (!auth.isAuthenticated) {
    const router = inject(Router);
    return router.createUrlTree(['../404'], {
      relativeTo: inject(ActivatedRoute),
    });
  }

  return auth.isAuthenticated;
};
