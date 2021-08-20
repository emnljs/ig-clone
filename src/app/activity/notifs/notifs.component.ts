import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifs',
  templateUrl: './notifs.component.html',
  styleUrls: ['./notifs.component.scss'],
})
export class NotifsComponent implements OnInit {
  @Input()
  activities;

  constructor() {}

  ngOnInit() {}
}
