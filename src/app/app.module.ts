import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddDrPipe } from './add-dr.pipe';
import { EquipeComponent } from './equipe/equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddDrPipe,
    EquipeComponent,
    AddEquipeComponent,
    NavbarComponent,
    UpdateEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
