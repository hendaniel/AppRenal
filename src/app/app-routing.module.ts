import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NeedAuthGuard } from './NeedAuthGuard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule',  canActivate: [NeedAuthGuard] },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule',  canActivate: [NeedAuthGuard] },
  { path: 'diets', loadChildren: './diets/diets.module#DietsPageModule',  canActivate: [NeedAuthGuard] },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule',  canActivate: [NeedAuthGuard] },
  { path: 'product', loadChildren: './Views/product/product.module#ProductPageModule',  canActivate: [NeedAuthGuard] },
  { path: 'habit', loadChildren: './Views/habit/habit.module#HabitPageModule',  canActivate: [NeedAuthGuard] },
  { path: 'list-compare', loadChildren: './Views/list-compare/list-compare.module#ListComparePageModule',  canActivate: [NeedAuthGuard] },
  { path: 'comparation', loadChildren: './Views/comparation/comparation.module#ComparationPageModule',  canActivate: [NeedAuthGuard] },
  { path: 'eat', loadChildren: './Views/eat/eat.module#EatPageModule',  canActivate: [NeedAuthGuard] },
  { path: 'login', loadChildren: './Views/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './Views/register/register.module#RegisterPageModule' },
  { path: 'new-diet', loadChildren: './Views/new-diet/new-diet.module#NewDietPageModule' },
  { path: 'more-info-product', loadChildren: './Views/more-info-product/more-info-product.module#MoreInfoProductPageModule' },
  { path: 'more-info-product/:id', loadChildren: './Views/more-info-product/more-info-product.module#MoreInfoProductPageModule' },
  { path: 'more-info-profile', loadChildren: './Views/more-info-profile/more-info-profile.module#MoreInfoProfilePageModule' },



   


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
