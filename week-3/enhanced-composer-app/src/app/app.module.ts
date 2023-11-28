import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
<<<<<<< HEAD
=======
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
>>>>>>> a7f82163e183e370c5382aae38d84fce2042839d

@NgModule({
  declarations: [
    AppComponent,
    ComposerListComponent,
    ContactComponent,
<<<<<<< HEAD
    AboutComponent
=======
    AboutComponent,
    ComposerDetailsComponent
>>>>>>> a7f82163e183e370c5382aae38d84fce2042839d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
