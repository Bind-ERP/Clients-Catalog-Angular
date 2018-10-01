import { AccountsService } from './bindAPI/api/accounts.service';
import { CatalogsService } from './bindAPI/api/catalogs.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientsService } from './bindAPI/api/clients.service';
import {ToastyModule} from 'ng2-toasty';
import {ModalModule} from 'ngx-modal';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ToastyModule.forRoot(),
    ModalModule,
  ],
  providers: [HttpModule, HttpClientModule, ClientsService, CatalogsService, AccountsService],
  bootstrap: [AppComponent]

})
export class AppModule { }
