import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BankManager {
  constructor() {}
  code: number = 1234;
  balance: number = 10000;

  checkCode(codeSend: any) {
    if (codeSend != this.code) {
      return false;
    } else {
      return true;
    }
  }

  getBalance() {
    return this.balance;
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      return 'Du hast zu wenig geld';
    } else {
      this.balance = this.balance - amount;
      return 'Erfolgreich abgebhoben';
    }
  }
}
