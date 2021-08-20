import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomService } from '../services/random.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  users$: Observable<any>;

  constructor(private randomService: RandomService) {}

  ngOnInit() {
    this.users$ = this.randomService.getUsers$();
  }
}
