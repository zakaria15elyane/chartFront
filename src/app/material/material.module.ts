import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatListModule,MatButtonModule,MatIconModule,MatFormFieldModule,
    MatDatepickerModule,MatDialogModule,MatSelectModule,MatNativeDateModule,MatInputModule
  ],
  exports:[MatListModule,MatButtonModule,MatIconModule,MatFormFieldModule,MatDatepickerModule,
    MatSelectModule,MatNativeDateModule,MatInputModule,MatDialogModule]
})
export class MaterialModule { }
