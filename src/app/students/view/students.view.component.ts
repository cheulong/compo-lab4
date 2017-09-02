import {Component} from '@angular/core';
import {Student} from '../student';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {StudentsDataService} from '../../service/students-data.service';
import 'rxjs/add/operator/switchMap';
@Component({
 selector: 'students-view',
 templateUrl: 'app/students/view/students.view.component.html',
 styleUrls:['app/students/view/students.view.component.css']
})
export class StudentsViewComponent {
	student:Student;
	
	constructor(private route:ActivatedRoute, private router:Router,private studentDataService:StudentsDataService){

	}
	
	ngOnInit(){
		// this.route
		// .data
		// .subscribe(inputData=>{this.student=(inputData ).student;})
			this.route.params.switchMap((params:Params)=>this.studentDataService.getStudent(+params['id']))
		.subscribe((student:Student)=>this.student=student);
		
	}
	showDetail(student:Student){
		this.router.navigate(['/detail',student.id]);
	}
}
