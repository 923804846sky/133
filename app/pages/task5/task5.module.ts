import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule} from 'ng-zorro-antd';
import { Task5RoutingModule } from './task5-routing.module';
import { Task5Component } from './task5.component';
import { ArticleComponent } from './article/article.component';
import{ PipesModule } from '../pipes/pipes.module'
import { from } from 'rxjs';
@NgModule({
  declarations: [Task5Component, ArticleComponent],
  imports: [
    CommonModule,
    Task5RoutingModule,
    NgZorroAntdModule,
    PipesModule
  ]
})
export class Task5Module { }
