import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyBackToTopModule
} from 'projects/layout/src/public-api';

import {
  SkyInfiniteScrollModule,
  SkyRepeaterModule
} from '@skyux/lists';

import {
  SkyTabsModule
} from '@skyux/tabs';

import {
  BackToTopDemoComponent
} from './back-to-top-demo.component';

@NgModule({
  imports: [
    CommonModule,
    SkyBackToTopModule,
    SkyInfiniteScrollModule,
    SkyRepeaterModule,
    SkyTabsModule
  ],
  declarations: [
    BackToTopDemoComponent
  ],
  exports: [
    BackToTopDemoComponent
  ]
})
export class BackToTopDemoModule { }
