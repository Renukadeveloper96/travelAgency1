import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { TravelPackage,ThemeColorComponent}from './travel-package.component'
import { TopDestinationComponent } from './top-destination.component';

// Theme Routing
import { TravelRoutingModule } from './travel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TravelRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule
  ],
  declarations: [
    TravelPackage,
    ThemeColorComponent,
    TopDestinationComponent,
  ]
})
export class ThemeModule {
}
