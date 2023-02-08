import { Component } from '@angular/core';
import { BankManager } from './bankManager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private bankManager: BankManager) {}

  loggedIn: boolean = false;
  msg: string = '';

  codeInput(inputEvent: any) {
    const code: any = inputEvent.target.value;

    if (inputEvent.target.value.length === 4) {
      this.loggedIn = this.bankManager.checkCode(code);
    }
  }

  withdrawMoney(amount: number) {
    this.msg = this.bankManager.withdraw(amount);
  }

  getBalance() {
    return this.bankManager.getBalance();
  }
}
