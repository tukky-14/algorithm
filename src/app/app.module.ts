import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BinarySearchComponent } from './binary-search/binary-search.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BinarySearchComponent,
    BubbleSortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
