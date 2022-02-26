import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ChatsComponent } from './chats/chats.component';
import { HomeComponent } from './home/home.component';

import { IndexPage } from './index.page';
import { MyAdsComponent } from './my-ads/my-ads.component';
import { SellComponent } from './sell/sell.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { 
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'chats',
        component: ChatsComponent
      },

      {
        path:'accounts',
        component: AccountComponent
      },

      {
        path: 'sell',
        component: SellComponent
      },
      {
        path: 'my-ads',
        component: MyAdsComponent
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule { }
