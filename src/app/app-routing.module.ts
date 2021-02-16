import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentshomeComponent } from './componentshome/componentshome.component';
import { ComponentstaskaddComponent } from './componentstaskadd/componentstaskadd.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentshomeComponent,
  },
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'task',
    children: [
      {
        path: 'add',
        component:ComponentstaskaddComponent,

      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
