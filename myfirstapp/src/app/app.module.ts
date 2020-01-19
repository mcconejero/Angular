import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { PrimerComponentComponent } from './primer-component/primer-component.component';
import { SegundoComponentComponent } from './segundo-component/segundo-component.component';
import { TercerComponentComponent } from './tercer-component/tercer-component.component';
import { HobbitComponentComponent } from './hobbit-component/hobbit-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    PrimerComponentComponent,
    SegundoComponentComponent,
    TercerComponentComponent,
    HobbitComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
