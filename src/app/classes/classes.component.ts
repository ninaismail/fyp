import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../tasks/task';
import { Class } from './class';


import { ClassesComponentService } from './classes-component.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
classes : Class = {
  Grade: 'Grade',     
  Section: 'Section',
  Subject: 'Subject',
};
tasks: Task = {
  Grade: "Grade",
  Title: "Title",
  Description: "Description",
};
class: Class;
task: Task;

  constructor(private service: ClassesComponentService, private router: Router,
    private route: ActivatedRoute) { 
    this.service.getData().subscribe((res) => {
     if (res.success) {
      this.classes = res.data;
      console.log(res.data);
    }
  }); 
  }


  ngOnInit(): void {
  }

}
