import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { ROUTER_FEATURE_KEY } from './reducers/router.reducer';
import { RoutingService } from './routing.service';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forFeature(ROUTER_FEATURE_KEY, routerReducer),
    StoreRouterConnectingModule.forRoot({
      stateKey: ROUTER_FEATURE_KEY,
    }),
  ],
  exports: [RouterModule],
  providers: [RoutingService],
})
export class RoutingModule {}
