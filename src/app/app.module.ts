import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppHeaderComponent } from './pages/app-header/app-header.component';
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: UserRegisterComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    HomePageComponent,
    AppHeaderComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
