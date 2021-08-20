import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomService } from '../services/random.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searches$: Observable<any>;

  constructor(private randomService: RandomService) {}

  ngOnInit() {
    this.searches$ = this.randomService.getPictures$();
  }
}
