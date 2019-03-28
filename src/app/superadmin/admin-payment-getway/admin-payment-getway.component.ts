import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-admin-payment-getway',
  templateUrl: './admin-payment-getway.component.html',
  styleUrls: ['./admin-payment-getway.component.scss']
})
export class AdminPaymentGetwayComponent implements OnInit {
  title = 'Stripe-ng Payment';
  newpay : Number;
  public allDone = false;
  pay : any = [
    {money:200, value:20000},
    {money:300, value:30000},
    {money:400, value:40000}
  ];

  constructor(private apiService : ApiService){}
  ngOnInit() {}

  openCheckout(event) {
    this.newpay = event.target.value;
    var user=this;
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_bxZaJ1GbgkJdTVuNh7vWcird00ff0FbvkP', // your pk test key from stripe 
      locale: 'auto',
      token: function (token: any) {
        console.log(token);
        user.apiService.confirmPayment(token).subscribe(
          res=>{
            console.log(res);
            user.allDone = true;
          },
          err=>{
            console.log(err);
          }
        )
      }
    });

    handler.open({
      name: 'GSP Production Payment',
      description: 'Test Stripe',
      amount: this.newpay,
      currency: 'usd'
    });

  }

}
