import { HomeComponent } from './home.component';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';
import { NavbarComponent } from './navbar.component';


import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list.component';

var routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'messages',
    component:HomeComponent
  },
  {
    path:'messages/:userID',
    component:HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavbarComponent,
    HomeComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    HttpModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
