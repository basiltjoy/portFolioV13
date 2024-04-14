import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.scss'],
})
export class TogglerComponent {
  @Output() valueChange = new EventEmitter();

  ngOnInit() { }

  constructor() { }

  isChecked: boolean = false;

  valueChanged(isChecked: any) {
    const gridElement = document.getElementById('grid');
    if (gridElement) {
      const elements = gridElement.querySelectorAll('*');
      elements.forEach(element => {
        (element as HTMLElement).style.color = '#aaa';
      });
    }

    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach(carouselItem => {
      const textElements = carouselItem.querySelectorAll('span, h6, h5, small, strong');
      textElements.forEach(textElement => {
        (textElement as HTMLElement).style.color = '#aaa';
      });
    });

    const pageContent = document.querySelector('.page-content');
    console.log(pageContent)
    if (isChecked) {
      console.log('Checkbox is ON');
      document.body.style.backgroundColor = '#333';
      if (pageContent) {
        (pageContent as HTMLElement).style.backgroundColor = '#333';
        const childElements = pageContent.querySelectorAll('div, ul');
        childElements.forEach((element) => {
          (element as HTMLElement).style.backgroundColor = '#333';
          console.log('aaaaaaa', element);
          switch (true) {
            case element.classList.contains('hero-container'):
              (element as HTMLElement).style.color = '#aaa';
              break;
            case element.classList.contains('card-body'):
              (element as HTMLElement).style.color = '#aaa';
              break;
            case element.classList.contains('h3'):
              (element as HTMLElement).style.color = '#aaa';
              break;
            case element.tagName === 'UL':
              (element as HTMLElement).style.color = '#aaa';
              break;
            case element.classList.contains('projects'):
              (element as HTMLElement).style.color = '#aaa';
              break;
            case element.classList.contains('progress-bar'):
              (element as HTMLElement).style.backgroundColor = 'blue';
              break;
            default:
              break;
          }
        });
      }
    } else {
      const gridElement = document.getElementById('grid');
      if (gridElement) {
        const elements = gridElement.querySelectorAll('*');
        elements.forEach(element => {
          (element as HTMLElement).style.color = '';
        });
      }

      const carouselItems = document.querySelectorAll('.carousel-item');
      carouselItems.forEach(carouselItem => {
        const textElements = carouselItem.querySelectorAll('span, h6, h5, small, strong');
        textElements.forEach(textElement => {
          (textElement as HTMLElement).style.color = '';
        });
      });

      console.log('Checkbox is OFF');
      document.body.style.backgroundColor = '';
      if (pageContent) {
        (pageContent as HTMLElement).style.backgroundColor = '';
        const childElements = pageContent.querySelectorAll('*');
        childElements.forEach((element) => {
          (element as HTMLElement).style.backgroundColor = '';
          switch (true) {
            case element.classList.contains('hero-container'):
              (element as HTMLElement).style.color = '';
              break;
            case element.classList.contains('card-body'):
              (element as HTMLElement).style.color = '';
              break;
            case element.classList.contains('h3'):
              (element as HTMLElement).style.color = '';
              break;
            case element.tagName === 'UL':
              (element as HTMLElement).style.color = '';
              break;
            case element.classList.contains('projects'):
              (element as HTMLElement).style.color = '';
              break;
            default:
              break;
          }
        });
      }
    }
  }





}
