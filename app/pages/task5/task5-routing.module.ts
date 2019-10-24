import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Task5Component } from './task5.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  {path:'',component:Task5Component,
  children:[
    {path:'article',component:ArticleComponent}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task5RoutingModule { }
