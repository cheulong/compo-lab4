import {Component,NgModule} from '@angular/core';
import {Student} from '../student';
import {StudentsDataDBService} from '../../service/students-data-db.service';
import {StudentsDataService} from '../../service/students-data.service';
import {Router} from '@angular/router';
@Component({
 selector: 'students-add',
 templateUrl: 'app/students/add/students.add.component.html',
 styleUrls:['app/students/add/students.add.component.css']
})
export class StudentsAddComponent {
	student:any={};
	constructor(private studentDataService:StudentsDataService,private router:Router){};

	upQuantity(student:Student){
		student.penAmount++;
	}

	downQuantity(student:Student){
		if (student.penAmount >0)
			student.penAmount--;
	}

	addStudent(student:Student){
		this.studentDataService.addStudent(student);
		alert("Add complete");
		this.router.navigate(['/list']);
	}
	onFileChange(event:any,student:any){
		var filename=event.target.files[0].name;
		console.log(filename);
		student.image=filename;
		
	}
}
