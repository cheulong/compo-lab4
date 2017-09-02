import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {StudentsComponent} from './students/list/students.component';
import {StudentsAddComponent} from './students/add/students.add.component';
import {StudentsViewComponent} from './students/view/students.view.component';
import{ FileNotFoundComponent} from './fileNotFound/file-not-found.component';
import {Routes,RouterModule}from '@angular/router';
import{StudentRoutingModule} from './students/student-routing.module';
const appRoutes: Routes=[

{path:'**', component:FileNotFoundComponent}
];


@NgModule({
  
  imports: [
  RouterModule.forRoot(appRoutes),StudentRoutingModule
  ],
 exports:[
 RouterModule
 ]
})
export class AppRoutingModule {
}
