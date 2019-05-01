import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'diets', loadChildren: './diets/diets.module#DietsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'product', loadChildren: './Views/product/product.module#ProductPageModule' },
  { path: 'habit', loadChildren: './Views/habit/habit.module#HabitPageModule' },
  { path: 'list-compare', loadChildren: './Views/list-compare/list-compare.module#ListComparePageModule' },
  { path: 'comparation', loadChildren: './Views/comparation/comparation.module#ComparationPageModule' },
  { path: 'login', loadChildren: './Views/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './Views/register/register.module#RegisterPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
