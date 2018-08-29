import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ResultsComponent } from './results/results.component';
import { MemoryComponent } from './memory/memory.component';
import { FooterComponent } from './footer/footer.component';
import { MemoryEditionComponent } from './memory-edition/memory-edition.component';
import { MemoryCreateComponent } from './memory-create/memory-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ResultsComponent,
    MemoryComponent,
    FooterComponent,
    MemoryEditionComponent,
    MemoryCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
