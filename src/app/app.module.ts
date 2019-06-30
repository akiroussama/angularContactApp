import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { ContactComponent } from './annuaire/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ContactListComponent } from './annuaire/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnnuaireComponent,
    ContactComponent,
    FooterComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
