import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";

import { ButtonGetComponent } from "./button-get/button-get.component";
import { DemoComponent } from "./demo/demo.component";

@NgModule({
  declarations: [AppComponent, ButtonGetComponent, DemoComponent],
  imports: [BrowserModule, RouterModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
