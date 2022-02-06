import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { ListComponent } from "./components/list/list.component";
import { MaterialUiModule } from "./material-ui/material-ui.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListItemComponent } from "./components/list-item/list-item.component";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    ListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
