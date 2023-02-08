import { Component } from '@angular/core';
import * as service from './someservicethatexportsaservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private service: service.service) {}

  loggedIn: boolean = false;
  msg: string = '';

  codeInput(inputEvent: any) {
    const code: any = inputEvent.target.value;

    if (inputEvent.target.value.length === 4) {
      this.loggedIn = this.service.checkCode(code);
    }
  }

  withdrawMoney(amount: number) {
    this.msg = this.service.withdraw(amount);
  }

  getBalance() {
    return this.service.getBalance();
  }
}
