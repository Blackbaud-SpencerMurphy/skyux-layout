import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyCardModule,
  SkyInlineDeleteModule
} from 'projects/layout/src/public-api';

import {
  InlineDeleteCardDemoComponent
} from './inline-delete-card-demo.component';

@NgModule({
  imports: [
    CommonModule,
    SkyCardModule,
    SkyInlineDeleteModule
  ],
  declarations: [
    InlineDeleteCardDemoComponent
  ],
  exports: [
    InlineDeleteCardDemoComponent
  ]
})
export class InlineDeleteCardDemoModule { }
