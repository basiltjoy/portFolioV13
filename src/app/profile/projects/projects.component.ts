import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  sh: any;
  isChecked: boolean = true;
  ToDO: boolean = false;
  SM: boolean = false;
  MD: boolean = false;
  chat: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.sh = 1
    this.MD = true;
  }

  ProjectList(event: any) {
    this.ToDO = this.SM = this.MD = this.chat = false;

    switch (event.target['name']) {
      case 'ToDo':
        this.ToDO = true;
        break;
      case 'SM':
        this.SM = true;
        break;
      case 'MD':
        this.MD = true;
        break;
      case 'chat':
        this.chat = true;
        break;
    }
  }



}
