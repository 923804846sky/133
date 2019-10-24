import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task4RoutingModule } from './task4-routing.module';
import { Task4Component } from './task4.component';


// import { Task5RoutingModule } from './task5/task5-routing.module';
import { Task5Component } from '../task5/task5.component';
import { NgZorroAntdModule} from 'ng-zorro-antd';
@NgModule({
  declarations: [Task4Component],
  imports: [
    CommonModule,
    Task4RoutingModule,
    NgZorroAntdModule,
    FormsModule
  ]
})
export class Task4Module { }
