import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ComponentshomeComponent } from './componentshome.component';
import { ComponentstasklistComponent } from '../componentstasklist/componentstasklist.component';
import { MaterialModule } from '../material/material.module';
import { NavigationComponent } from '../navigation/navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentstaskaddComponent } from '../componentstaskadd/componentstaskadd.component';
import { ComponentstaskshowComponent } from '../componentstaskshow/componentstaskshow.component';



@NgModule({
  declarations: [ComponentshomeComponent,ComponentstasklistComponent,NavigationComponent,
    ComponentstaskaddComponent,ComponentstaskshowComponent],
  imports: [
    CommonModule,ChartsModule,MaterialModule,AppRoutingModule,ReactiveFormsModule
  ],
  exports:[
    ComponentshomeComponent,NavigationComponent,ChartsModule,ReactiveFormsModule,
    ComponentstaskaddComponent,ComponentstaskshowComponent
  ]
})
export class ComponentModule { }
