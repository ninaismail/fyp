import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from '../login/user';
import { Task } from '../tasks/task';
import { TasksComponentService } from '../tasks/tasks-component.service';
@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.scss']
})
export class TasksDetailsComponent implements OnInit {
  task: Task[] = [];
    taskshow: Task;
  id: number;
  tasks: Task = {
    Grade: "",
    Title: "",
    Description: "",
  }; 
  users : User = {
    Username: 'Username',     
    Password: 'Password',
    status:'status',
  };
  status:String;
  username: String;
  constructor(private service: TasksComponentService,private route: ActivatedRoute,
    private router: Router) {}
  loadtask() {
    const taskid = this.route.snapshot.paramMap.get('id');
    this.service.getID(taskid).subscribe((res) => {
      if (res.success) {
       this.task = res.data;
         this.taskshow = res.data;
       console.log(res.data);
     }
    });
   }  
  ngOnInit(): void {
  this.loadtask();
  } 

  add() {
    const rm = {
      //_id: event.newData._id,
      Grade: this.tasks.Grade,
      Title: this.tasks.Title,
      Description: this.tasks.Description,
     };
       this.service.addTask(rm).subscribe(
         (res) => {
           this.service.addTask(this.tasks);
               this.taskshow =  this.tasks;   
          }
       );
   }
getstatus(){
  if( this.username.indexOf("Tea") > -1 ){
    this.status="Tea";
  }else if( this.username.indexOf("Stud") > -1){
    this.status="Stud";
  }
}
}
