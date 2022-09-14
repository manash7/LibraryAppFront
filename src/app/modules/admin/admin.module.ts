import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { StudenviewComponent } from './studenview/studenview.component';



@NgModule({
  declarations: [
    CreateComponent,
    ReadComponent,
    HeaderComponent,
    EditComponent,
    StudenviewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
  ]
})
export class AdminModule { }
