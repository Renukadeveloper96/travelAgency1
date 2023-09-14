import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelPackage } from './travel-package.component';
import { TopDestinationComponent } from './top-destination.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Travel ',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'colors',
      },
      {
        path: 'colors',
        component: TravelPackage,
        data: {
          title: 'Travel Package',
        },
      },
      {
        path: 'typography',
        component: TopDestinationComponent,
        data: {
          title: 'Top Destination',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelRoutingModule {}
