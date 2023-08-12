import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private notificationService: NotificationService) {
    this.showNotification()
  }

  ngOnInit() {   
  }

  showNotification() {
    this.notificationService.show({
      content: 'Welcome to my Portfolio',
      hideAfter: 700,
      position: { horizontal: 'center', vertical: 'top' },
      animation: { type: 'slide', duration: 2500 },
      type: { style: 'warning', icon: true }
    });
  }

}
