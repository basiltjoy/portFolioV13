import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  Footer: string = '';
  highlightFooter = true;
  constructor() { }

  ngOnInit(): void {
    this.Footer= environment.footerContent1
  }

}
