import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmulatedComponent } from './emulated/emulated.component';
import { NoneComponent } from './none/none.component';
import { ShadowdomComponent } from './shadowdom/shadowdom.component';

@NgModule({
  declarations: [
    AppComponent,
    EmulatedComponent,
    NoneComponent,
    ShadowdomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
