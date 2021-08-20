import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomService } from '../services/random.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  activities$: Observable<any>;
  constructor(private randomService: RandomService) {}

  ngOnInit() {
    this.activities$ = this.randomService.getUsers$();
  }
}
