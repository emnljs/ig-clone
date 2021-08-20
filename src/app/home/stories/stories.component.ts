import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  @Input()
  stories: any[];

  opts = {
    initialSlide: 1,
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesOffsetBefore: 25,
  };

  constructor() {}

  ngOnInit() {}
}
