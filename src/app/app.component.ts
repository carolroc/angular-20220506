import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { GithubserviceService } from './githubservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Projeto da Carol';

  constructor(public gitHubService: GithubserviceService, public bitcoinService: BitcoinService){}

  ngOnInit(){
    this.gitHubService.update();
  }

  updateBitcoinRates(){
    this.bitcoinService.update();
  }
}
