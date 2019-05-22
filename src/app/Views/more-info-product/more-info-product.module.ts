import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoreInfoProductPage } from './more-info-product.page';

const routes: Routes = [
  {
    path: '',
    component: MoreInfoProductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoreInfoProductPage]
})
export class MoreInfoProductPageModule {}
