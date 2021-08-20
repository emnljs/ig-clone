import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { StoryComponent } from './stories/story/story.component';
import { StoriesComponent } from './stories/stories.component';
import { PostComponent } from '../shared/posts/post/post.component';
import { PostsComponent } from '../shared/posts/posts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
  ],
  declarations: [
    HomePage,
    StoriesComponent,
    StoryComponent,
    PostsComponent,
    PostComponent,
  ],
})
export class HomePageModule {}
