import { Component, OnInit } from '@angular/core';
import { MessagingService } from './service/messaging.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'push-notification';
  message;

  constructor(private messagingService: MessagingService) { }

ngOnInit() {
  this.messagingService.requestPermission();
  this.messagingService.receiveMessage();
  this.message = this.messagingService.currentMessage;
 }

}
