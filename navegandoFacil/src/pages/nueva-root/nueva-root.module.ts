import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaRootPage } from './nueva-root';

@NgModule({
  declarations: [
    NuevaRootPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaRootPage),
  ],
})
export class NuevaRootPageModule {}
