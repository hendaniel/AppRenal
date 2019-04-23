import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListComparePage } from './list-compare.page';
import { PipesModule } from "../../pipes/pipes.module";

const routes: Routes = [
  {
    path: '',
    component: ListComparePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListComparePage]
})
export class ListComparePageModule {}
