import { BrowserModule } from '@angular/platform-browser';
import {Inject, Injectable, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductMessageComponent } from './product-message/product-message.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductMessageComponent,
    ProductGridComponent,
    HeaderComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
@Injectable()
export class AppModule { }
