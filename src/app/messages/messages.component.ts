import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { state, style, trigger } from '@angular/animations';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  animations: [
    trigger('message-state', [
      state('even-messages', style({
        backgroundColor: '#fce38a' // green
      })),
      state('odd-messages', style({
        backgroundColor: '#95e1d3' // yellow
      }))
    ])
  ]
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
