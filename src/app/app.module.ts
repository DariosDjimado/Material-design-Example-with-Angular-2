import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// import material
import { MaterialModule }  from '@angular/material';
// use for animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { HomeComponent } from './components/home/home.component';
import { MyWorksComponent } from './components/my-works/my-works.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const mainRoutes:  Routes=[
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path: 'templates', component: TemplatesComponent},
  {path: 'works', component: MyWorksComponent},
  {path:'**',component: PageNotFoundComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    HomeComponent,
    MyWorksComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(mainRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
