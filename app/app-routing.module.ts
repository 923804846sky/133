import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', redirectTo: 'login' ,pathMatch:'prefix'},
  {path:'login',loadChildren: "./pages/task4/task4.module#Task4Module"},
  {path:'task5',loadChildren: "./pages/task5/task5.module#Task5Module"},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
