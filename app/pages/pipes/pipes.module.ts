import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPipe  ,TypePipe } from './all.pipe'; 



@NgModule({
  declarations: [StatusPipe,TypePipe ],
  imports: [
    CommonModule
  ],
  exports:[ StatusPipe,TypePipe ]
})
export class PipesModule { }
