import { Component, OnInit } from '@angular/core';
import { TasksComponentService } from './tasks-component.service';
import { Task } from './task';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from '../classes/class';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
 tasks: Task = {
    Grade: "Grade",
    Title: "Title",
    Description: "Description",
  };
  classes : Class = {
    Grade: 'Grade',     
    Section: 'Section',
    Subject: 'Subject',
  };
  class: Class[] = [];
  task: Task[] = [];
  
  taskshow: Task[] = [];
  constructor(private service: TasksComponentService, private route: ActivatedRoute,
    private router: Router) { 
    this.service.getData().subscribe((res) => {
     if (res.success) {
      this.tasks = res.data;
        this.taskshow = res.data;
      console.log(res.data);
    }
  }); 
 }
 public classGrade;
 getclassGrade(){
     this.classGrade = this.route.snapshot.paramMap.get("Grade");
 console.log('res', this.classGrade);
   }
  ngOnInit(): void {
        this.getclassGrade();
  }

}