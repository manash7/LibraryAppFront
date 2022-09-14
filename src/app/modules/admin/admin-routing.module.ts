import { StudenviewComponent } from './studenview/studenview.component';
import { EditComponent } from './edit/edit.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from "./read/read.component";
import { CreateComponent } from './create/create.component'
import { SignupComponent } from 'src/app/components/signup/signup.component';
const routes: Routes = [
  { path: '', component:ReadComponent},
  { path: '/create', component:CreateComponent},
  { path:'/signup', component:SignupComponent},
  { path:'/edit/:bookId', component:EditComponent},
  { path:'student', component:StudenviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
