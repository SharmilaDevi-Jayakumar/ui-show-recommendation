import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {UserRegisterComponent} from "./pages/user-register/user-register.component";

const routes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent,
  },
  {
    path: '',
    component: UserRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
