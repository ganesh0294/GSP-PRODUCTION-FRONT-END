import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // model = {
  //   email : '',
  //   password: ''
  // };
  model: any = {};
// tslint:disable-next-line: max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;


  constructor(private modalService: NgbModal, private userService: UserService,private router : Router) {}

  ngOnInit() {
    // this.userService.getLogin();
    // if (this.userService.isLoggedIn()) {
    // this.router.navigateByUrl('/admindashboard');
    // }
  }


  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        //this.modalService.dismissAll();
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/admindashboard');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
