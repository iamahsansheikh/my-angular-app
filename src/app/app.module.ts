import { LastnameComponent } from './lastname/lastname.component';
import { PersonService } from './services/person.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { CommonPersonComponent } from './common-person/common-person.component';
import { RouterModule } from '@angular/router';
import { NameComponent } from './name/name.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    CommonPersonComponent,
    NameComponent,
    NavbarComponent,
    LastnameComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    MatTableModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: PersonsComponent },
      { path: 'firstName', component: NameComponent },
      { path: 'lastName', component: LastnameComponent }
    ])
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
