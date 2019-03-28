import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-adminslist',
  templateUrl: './adminslist.component.html',
  styleUrls: ['./adminslist.component.scss']
})
export class AdminslistComponent implements OnInit {
  adminDetails: any;
  NewEmpData = {
    firstname: '',
    lastname: '',
    email: '',
    designation: '',
    position: ''
  };

  result: Object;
  email: Object;
  id: Object;
  closeResult: string;
  constructor(private userService: UserService, private router: Router,
    private httpClient: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
    // this.userService.getAllAdminsData().subscribe(
    //   res => {
    //     console.log(res);
    //     this.adminDetails = res;
    //   },
    //   err => {
    //     console.log(err);

    //   }
    // );
  }

  open(content, items) {
    this.email = items.email;
    console.log(items.email);
    this.id = items._id;
    console.log(items._id);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  UpdateUser() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const id = this.id;
    const datasUpload = {
      fullName: this.NewEmpData.firstname,
      lastname: this.NewEmpData.lastname,
      email: this.email,
      designation: this.NewEmpData.designation,
      position: this.NewEmpData.position
    };
    console.log(datasUpload);
    this.httpClient.patch(environment.apiBaseUrl + '/adminsUpdate/' + id, datasUpload, { headers }).subscribe(
      res => {
        console.log(res)
        this.modalService.dismissAll(this.closeResult = 'Data is Updated Successfully');
      },
      error => { console.log(error) }
    )
  }
  DeleteUser(contents, item) {
    console.log(item);
    const email = item.email;
    console.log(item.email);
    const httpOptions = {}
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const id = item._id;
    this.httpClient.delete(environment.apiBaseUrl + '/deleteAdmin/' + id, { headers }).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

}


