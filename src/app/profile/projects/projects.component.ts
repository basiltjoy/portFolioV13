import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  sh: any;
  isChecked: boolean = true;
  ToDO: boolean = true;
  SM: boolean = false;
  Mediclinic: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.sh = 1
    this.ToDO = true;
  }

  ProjectList(event: any) { 
    if (event.target['name'] == 'ToDo') { 
      this.ToDO = true; 
      this.SM = false; 
      this.Mediclinic = false; 
    } 
    else if (event.target['name'] == 'SM') {
      this.SM = true; 
      this.ToDO = false; 
      this.Mediclinic = false; 
    } else { 
      this.Mediclinic = true; 
      this.SM = false; 
      this.ToDO = false; 
    } 
  }


}
