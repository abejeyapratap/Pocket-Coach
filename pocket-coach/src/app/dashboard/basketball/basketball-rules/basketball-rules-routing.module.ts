/**
 * File name: basketball-rules-routing.module.ts
 * Purpose: Routing configuration for Rules Home Page
 * Date: 5/4/21
 * Author(s): Abe Jeyapratap
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballRulesPage } from './basketball-rules.page';

const routes: Routes = [
  {
    path: '',
    component: BasketballRulesPage,
  },
  {
    path: 'basketball-basic',
    loadChildren: () =>
      import('./basketball-basic/basketball-basic.module').then(
        (m) => m.BasketballBasicPageModule
      ),
  },
  {
    path: 'basketball-advanced',
    loadChildren: () =>
      import('./basketball-advanced/basketball-advanced.module').then(
        (m) => m.BasketballAdvancedPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballRulesPageRoutingModule {}
