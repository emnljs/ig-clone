import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { LogoComponent } from './logo/logo.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryComponent } from './stories/story/story.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    LogoComponent,
    PostsComponent,
    PostComponent,
    StoriesComponent,
    StoryComponent,
  ],
  exports: [
    LogoComponent,
    PostsComponent,
    PostComponent,
    StoriesComponent,
    StoryComponent,
  ],
})
export class SharedModule {}
