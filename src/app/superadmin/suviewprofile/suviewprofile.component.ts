import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-suviewprofile',
  templateUrl: './suviewprofile.component.html',
  styleUrls: ['./suviewprofile.component.scss'],
  providers: [ToastrService]
})
export class SuviewprofileComponent implements OnInit {
  newuploadData = {
    _id: '',
    fullName: '',
    email: '',
    position: '',
    department: '',
    mobile: ''
  };
  userDetails;
  id;
  filesToUpload: Array<File> = [];
  product;
  selectedFile: File;
  constructor(private userService: UserService, private router: Router,
    private httpClient: HttpClient, private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit() {
    this.userService.getSuperAdminProfile().subscribe(
      res => {
        console.log("init User Id : ", JSON.stringify(res));

        this.newuploadData = res['user'];
        this.newuploadData._id = this.newuploadData._id;
        //  console.log("init User Id : ",this.newuploadData.id);
        // console.log(this.userDetails);
      },
      err => {
        console.log(err);

      }
    );
  }

  uploadNewData() {
    let id = this.newuploadData._id;
    console.log("User Id : ", id);
    const newdata = {
      id: id,
      fullName: this.newuploadData.fullName,
      email: this.newuploadData.email,
      position: this.newuploadData.position,
      department: this.newuploadData.department,
      mobile: this.newuploadData.mobile
    }
    console.log("init User newdata : ", newdata);

    this.httpClient.post(environment.apiBaseUrl + '/superadmin', { id: id, data: newdata }).subscribe(
      res => {
        console.log('hello', res);
        if (res['status'] == true) {
          this.toastr.success('Update Profile', 'Success!');
        }
        this.ngOnInit();
      },
      error => {
        console.log('error', error);
        //this.toastr.errorToastr(error, 'Oops!');
      }
    );
  }

  onFileChanged(event) {
    console.log('event', event.target.files[0]);
    this.selectedFile = event.target.files[0];
  }

}
