import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: ['Angular^1000','React', 'SQL','Mobile'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
      smartBackspace: true 
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)
  }

}
