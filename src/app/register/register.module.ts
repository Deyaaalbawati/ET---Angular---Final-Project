import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisternavComponent } from './registernav/registernav.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RegisterpagrComponent } from './registerpagr/registerpagr.component';
import { RegistercontentComponent } from './registercontent/registercontent.component';
import { Registercontent2Component } from './registercontent2/registercontent2.component';

import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    RegisternavComponent,
    RegisterpagrComponent,
    RegistercontentComponent,
    Registercontent2Component,
    
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSelectModule
    
  ]
})
export class RegisterModule { }
