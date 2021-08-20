import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomService } from '../services/random.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user$: Observable<any>;
  posts$: Observable<any>;
  segment: string = 'grid';
  searches$: Observable<any>;
  constructor(private randomService: RandomService) {}

  ngOnInit() {
    this.user$ = this.randomService.getUser$();
    this.searches$ = this.randomService.getPictures$();
    this.posts$ = this.randomService.getUsers$();
  }

  segmentChanged = ($event) => {
    this.segment = $event.detail.value;
  };
}
