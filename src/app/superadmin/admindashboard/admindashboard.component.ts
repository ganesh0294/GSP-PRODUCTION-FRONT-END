import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ViewChild } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';



@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['../../app.component.scss', './admindashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdmindashboardComponent implements OnInit {
  adminDetails;

  constructor(private httpClient: HttpClient, private userService: UserService, private router: Router) { }

  ngOnInit() {
    // this.httpClient.get(environment.apiBaseUrl + '/dashboard').subscribe(
    //   res => {
    //     console.log('Hello', res);
    //   },
    //   error => {
    //     console.log('error', error);
    //   }
    // );
    
    // this.userService.getAllAdminsData().subscribe(
    //   res => {
    //     console.log("getAllAdminsData : ",JSON.stringify(res));
        
    //     this.adminDetails = res;
    //   },
    //   err => {
    //     console.log(err);

    //   }
    // );
  }

}
