import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'mlogin', pathMatch: 'full'},
  { path: 'mlogin', loadChildren: './login/login.module#LoginModule' },
  { path: 'mestructura', loadChildren: './estructura/estructura.module#EstructuraModule' },
  { path: '**', redirectTo: '' } // otherwise redirect to home
];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
