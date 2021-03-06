import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GithubserviceService } from './githubservice.service';
import { HttpClientModule } from '@angular/common/http';
import { BitcoinService } from './bitcoin.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [GithubserviceService, BitcoinService],
})
export class AppModule {}
