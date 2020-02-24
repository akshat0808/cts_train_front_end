import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    
  HeaderComponent,

  AppComponent,
    
  FooterComponent,
    
  SidebarComponent,
    
  MainContentComponent,
    
  NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
