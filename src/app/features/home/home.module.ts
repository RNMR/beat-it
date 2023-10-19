import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HOME_COMPONENTS } from './components';
import { UiModule } from '../ui/ui.module';
import { HomeRoutingModule } from './home-routing.module';


// import { AuthCommonsModule } from './commons/commons.module';


@NgModule({
  declarations: [
    ...HOME_COMPONENTS,
  ],
  imports: [
    CommonModule,
    UiModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
