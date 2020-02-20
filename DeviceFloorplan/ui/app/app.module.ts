import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { ContentComponent } from "./content/content.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";

import { from } from "rxjs";

import { CommonSerivce } from "../service/common.service";
import { MessageSerivce } from "../service/message.service";

const routes: Routes = [
  { path: "", redirectTo: "loginpage", pathMatch: "full" },
  { path: "loginpage", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "contentpage", component: ContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    LoginComponent,

    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  providers: [CommonSerivce, MessageSerivce],
  bootstrap: [AppComponent]
})
export class AppModule {}
