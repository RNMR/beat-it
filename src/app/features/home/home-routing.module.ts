import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, InformationComponent } from './components';


const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
  },
  { 
    path: 'information',
    component: InformationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
