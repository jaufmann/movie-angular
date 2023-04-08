import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';
import {HttpClientModule} from "@angular/common/http";
import { CastComponent } from './shared/components/actor/cast.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent,
    CastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
