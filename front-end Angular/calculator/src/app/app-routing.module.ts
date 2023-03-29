import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import {SubtractionComponent} from './subtraction/subtraction.component';
import { MultiComponent  } from './multi/multi.component';
import { DivisionComponent } from "./division/division.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'addition',component:AdditionComponent},
  {path:'substraction',component:SubtractionComponent},
  {path:'multiplication',component:MultiComponent},
  {path:'division',component:DivisionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
