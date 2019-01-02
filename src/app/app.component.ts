import { LotteryContract } from './contracts/lottery.contract';
import { Component, OnInit, Inject } from '@angular/core';
import { WEB3 } from './web3';
import Web3 from 'web3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  manager: string;
  players: any[];
  balance: number;

  value = 0;

  message = '';

  constructor(
    private _lottery: LotteryContract,
    @Inject(WEB3) public web3: Web3) {
  }

  ngOnInit() {
    this.refresh();
    console.log('here');
  }

  async onSubmit() {
    this.message = 'Waiting on transaction success...';
    const accounts = await this.web3.eth.getAccounts();
    await this._lottery.methods.enter().send({
      from: accounts[0],
      value: this.web3.utils.toWei(this.value, 'ether')
    });
    this.message = 'You have been entered!';
    this.refresh();
  }

  async onClick() {
    this.message = 'Waiting on transaction success...';
    const accounts = await this.web3.eth.getAccounts();
    await this._lottery.methods.pickWinner().send({
      from: accounts[0]
    });
    this.message = 'A winner has been picked!';
  }

  private async refresh() {
    this.manager = await this._lottery.methods.manager().call();
    this.players = await this._lottery.methods.getPlayers().call();
    this.balance = await this.web3.eth.getBalance(this._lottery.options.address);
  }
}

