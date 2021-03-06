import {Component} from '@angular/core';
import {Student} from '../students/student';
import {StudentsDataService} from "../service/students-data.service";
@Component({
	selector: 'menu',
	templateUrl: 'app/menu/menu.component.html',
	styleUrls:['app/menu/menu.component.css']
})
export class MenuComponent{
	students: Student[];
	 constructor (private studentDataService:StudentsDataService){}
  ngOnInit(){
    this.studentDataService.getStudentsData()
      .subscribe(students => this.students= students);
  }
}