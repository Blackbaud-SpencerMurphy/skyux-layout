import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SkyI18nModule
} from '@skyux/i18n';

import { SkyLayoutResourcesModule } from '../shared/sky-layout-resources.module';

import { SkyDefinitionListComponent } from './definition-list.component';
import { SkyDefinitionListContentComponent } from './definition-list-content.component';
import { SkyDefinitionListHeadingComponent } from './definition-list-heading.component';
import { SkyDefinitionListLabelComponent } from './definition-list-label.component';
import { SkyDefinitionListValueComponent } from './definition-list-value.component';

@NgModule({
  declarations: [
    SkyDefinitionListComponent,
    SkyDefinitionListContentComponent,
    SkyDefinitionListHeadingComponent,
    SkyDefinitionListLabelComponent,
    SkyDefinitionListValueComponent
  ],
  imports: [
    CommonModule,
    SkyI18nModule,
    SkyLayoutResourcesModule
  ],
  exports: [
    SkyDefinitionListComponent,
    SkyDefinitionListContentComponent,
    SkyDefinitionListHeadingComponent,
    SkyDefinitionListLabelComponent,
    SkyDefinitionListValueComponent
  ]
})
export class SkyDefinitionListModule { }
