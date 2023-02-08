import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should log in with code 1234`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.codeInput({ target: { value: '1234' } });
    expect(app.loggedIn).toEqual(true);
  });

  it(`should withdraw 1000`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.withdrawMoney(1000);
    expect(app.msg).toEqual('Erfolgreich abgebhoben');
    expect(app.getBalance()).toEqual(9000);
  });

  it(`should return 'Du hast zu wenig geld'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.withdrawMoney(10001);
    expect(app.msg).toEqual('Du hast zu wenig geld');
  });

  it(`should return balance of 10k`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.getBalance()).toEqual(10000);
  });
});
