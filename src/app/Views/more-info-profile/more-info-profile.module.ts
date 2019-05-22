import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoreInfoProfilePage } from './more-info-profile.page';

const routes: Routes = [
  {
    path: '',
    component: MoreInfoProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoreInfoProfilePage]
})
export class MoreInfoProfilePageModule {}
