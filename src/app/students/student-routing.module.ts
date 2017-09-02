import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../app.component';
import {StudentsComponent} from './list/students.component';
import {StudentsAddComponent} from './add/students.add.component';
import {StudentsViewComponent} from './view/students.view.component';
import {Routes,RouterModule}from '@angular/router';

const studentRoutes: Routes=[
//{path: 'view',component:StudentsViewComponent },
// {path:'view',component:StudentsViewComponent,
// data:{
// 	student:{
// 		"id": 1,
// 			"studentId":"SE-001",
// 			"name":"Prayuth",
// 			"surname":"The minister",
// 			"gpa":3.59,
// 			"image":"images/tu.jpg",
// 			"featured":false,
// 			"penAmount":15,
//       "description":"The great man ever!!!!"
// 	}
// }
// },

{path:'detail/:id',component:StudentsViewComponent},
{path:'add',component:StudentsAddComponent},
{path:'list',component:StudentsComponent},
{path:'',redirectTo:'/list',pathMatch:'full'}
];


@NgModule({
  
  imports: [
  RouterModule.forRoot(studentRoutes)
  ],
 exports:[
 RouterModule
 ]
})
export class StudentRoutingModule {
}
,