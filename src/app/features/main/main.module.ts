import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MAIN_COMPONENTS } from './components';


// import { AuthCommonsModule } from './commons/commons.module';


@NgModule({
  declarations: [
    ...MAIN_COMPONENTS,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
