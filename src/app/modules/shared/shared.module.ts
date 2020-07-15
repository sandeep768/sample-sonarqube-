import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    NotfoundComponent,
    HelpComponent
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
