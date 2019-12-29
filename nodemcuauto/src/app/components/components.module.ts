import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        MenuComponent
    ],
    exports: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
})

export class ComponentsModule { }