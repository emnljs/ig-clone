import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityPageRoutingModule } from './activity-routing.module';

import { ActivityPage } from './activity.page';
import { NotifsComponent } from './notifs/notifs.component';
import { NotificationComponent } from './notifs/notification/notification.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ActivityPageRoutingModule],
  declarations: [ActivityPage, NotifsComponent, NotificationComponent],
})
export class ActivityPageModule {}
