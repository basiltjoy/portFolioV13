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

  constructor() { }

  ngOnInit(): void {
    this.sh = 1
    this.MD = true;
  }

  ProjectList(event: any) {
    if (event.target['name'] == 'ToDo') {
      this.ToDO = true;
      this.SM = false
      this.MD = false;
    }
    else if (event.target['name'] == 'SM') {
      this.SM = true
      this.ToDO = false;
      this.MD = false;
    }
    else if (event.target['name'] == 'MD') {
      this.MD = true;
      this.SM = false
      this.ToDO = false;
    }
  }


}
