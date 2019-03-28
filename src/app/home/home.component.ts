import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ToastrService]
})
export class HomeComponent implements OnInit, Validators {

  authType: String = 'register';
  submitted = false;
  public registrationForm: FormGroup;
  public loginForm: FormGroup;
  public forgotPasswordForm: FormGroup;
  emailExist = false;
  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
  // "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";
  numberRegex = /^[0-9]{10}$/;

  constructor(private modalService: NgbModal, private form: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService) { }

  model = {
    email: '',
    password: '',
    position: '',
    department: '',
    mobile: '',
    fullName: ''
  };

  //emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  regServerErrorMessages: string;
  showSucessMessage: boolean;
  private modalRef: NgbModalRef;

  ngOnInit() {
    this.createRegistrationFrom();
    this.createLoginFrom();
    this.createForgotPasswordForm();
  }
  closeResult: string;

  private createRegistrationFrom() {
    this.registrationForm = this.form.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', [Validators.required]
        //  Validators.pattern(this.emailRegex)]
      ],
      position: ['', [Validators.required]],
      department: ['', [Validators.required]],
      mobile: ['', [Validators.required]]
    });
  }
  public get f() {
    return this.registrationForm.controls;
  }

  public createLoginFrom() {
   // console.log("createLoginFrom");
    this.loginForm = this.form.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordRegex)]]
    });
  }
  public get fl() {
    //console.log("this.loginForm.value");
    return this.loginForm.controls;
  }

  public createForgotPasswordForm() {
    //console.log("createForgotPasswordForm");
    this.forgotPasswordForm = this.form.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
    });
  }
  public get fp() {
    //console.log("this.forgotPasswordForm.value");
    return this.forgotPasswordForm.controls;
  }

  open(login) {
    this.modalService.open(login, { ariaLabelledBy: 'modal-basic-title', }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openRegistration(registration) {
    this.modalService.open(registration, { ariaLabelledBy: 'modal-basic-title', }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openForgetPassword(forgotPassword) {
    this.modalService.open(forgotPassword, { ariaLabelledBy: 'modal-basic-title', }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit() {
    this.submitted = true;
    let loginInput = this.loginForm.controls;
    if (loginInput.email.valid && loginInput.password.valid) {
      const userLoginCredentials = this.loginForm.value;
      this.userService.login(userLoginCredentials).subscribe(
        res => {
          this.modalService.dismissAll();
          this.userService.setToken(res['token']);
          let user_id = res['data']._id;
          localStorage.setItem('user_id', user_id);
          let user_data = {
            'user_name': res['data'].fullName,
            'user_email': res['data'].email,
            'user_position': res['data'].position,
            'user_department': res['data'].department,
            'user_mobile': res['data'].mobile
          };
          localStorage.setItem('user_data', JSON.stringify(user_data));
          this.router.navigateByUrl('/admindashboard');
        },
        err => {
          this.serverErrorMessages = err.error.message;
        }
      );
    }
  }

  onSubmitRegister() {
    this.submitted = true;
    let inputted = this.registrationForm.controls;
    if (inputted.fullName.valid && inputted.email.valid && inputted.password.valid &&
      inputted.position.valid && inputted.department.valid
      && inputted.mobile.valid) {
      const userCredentials = this.registrationForm.value;
      this.userService.postUser(userCredentials).subscribe(
        res => {
          this.modalService.dismissAll();
          this.toastr.success('Registration', 'Success!');
        },
        err => {
          if (err.status === 422) {
            this.regServerErrorMessages = err.error.join('<br/>');
          } else
            this.toastr.error('Something went wrong.Please contact admin.', 'Error!');
        }
      );
    } else {
      this.toastr.error('Error in Field', 'Please Provide Proper Field Data');
    }
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      _id: '',
      fullName: '',
      email: '',
      password: '',
      department: '',
      position: '',
      mobile: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  deletechase() {
    localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_data');
  }

  onSubmitForgotPassword() {
    this.submitted = true;
    let inputted = this.forgotPasswordForm.controls;
    if (inputted.email.valid) {
      const userCredentials = this.forgotPasswordForm.value;
      this.userService.postUserForgetPassword(userCredentials).subscribe(
        res => {
          this.modalService.dismissAll();
          this.toastr.success('Email verification sent', 'Success!');
        },
        err => {
          if (err.status === 422) {
            this.regServerErrorMessages = err.error.join('<br/>');
          } else
            this.toastr.error('Something went wrong.Please contact admin.', 'Error!');
        }
      );
    } else {
      this.toastr.error('Error in Field', 'Please Provide Proper Field Data');
    }
  }

}
