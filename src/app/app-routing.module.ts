import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: 'Home' , component: HomeComponent
  },
  {
    path: 'About' , component: AboutComponent
  },
  {
    path: 'Services' , component: ServicesComponent
  },
  {
    path: 'Contact' , component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
