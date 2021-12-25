import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddDrPipe } from './add-dr.pipe';
import { EquipeComponent } from './equipe/equipe.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddDrPipe,
    EquipeComponent,
    AddEquipeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
