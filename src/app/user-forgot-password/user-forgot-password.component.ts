import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-forgot-password',
  templateUrl: './user-forgot-password.component.html',
  styleUrls: ['./user-forgot-password.component.scss']
})
export class UserForgotPasswordComponent implements OnInit {

  public changePasswordForm : FormGroup;
  passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
  submitted = false;
  routeParams;
  paramid;
  paramemail;

  regServerErrorMessages: string;

  constructor(private modalService: NgbModal,private activeRoute: ActivatedRoute, private form: FormBuilder, private userService: UserService, private router : Router,  private toastr: ToastrService) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.paramid = params['id'];
      this.paramemail = params['email'];
    });
    this.createChangePasswordFrom();
  }

  private createChangePasswordFrom() {
    this.changePasswordForm = this.form.group({
      newPassword: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
    });
  }
  public get cp() {
    return this.changePasswordForm.controls;
  }

  changePassword() {
    this.submitted = true;
    let inputted = this.changePasswordForm.controls;
    if (inputted.newPassword.valid && inputted.confirmPassword.valid ) {
        const userCredentials = this.changePasswordForm.value;
        if(userCredentials.newPassword == userCredentials.confirmPassword) {
            userCredentials.saltSecret = this.paramid;
            userCredentials.email = this.paramemail;
          this.userService.changeUserPassword(userCredentials).subscribe(
            res => {
              this.modalService.dismissAll();
              this.toastr.success('Password Change', 'Success!');
              this.router.navigateByUrl('/home');

            },
            err => {
              if (err.status === 422) {
                this.regServerErrorMessages = err.error.join('<br/>');
              } else
              this.toastr.error('Something went wrong.Please contact admin.', 'Error!');
            }
          );
        } else {
          this.toastr.error('New Password and Confirm Password not matched.', 'Error!');
          this.modalService.dismissAll();
        }
        
    }else{
      this.toastr.error('Error in Field', 'Please Provide Proper Field Data');
    }
  }
}
