import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userDetails;
  public fullName;
  public profileStatus : boolean = false;
   dataArr = [];
   selectedFiles: FileList;

  constructor(private userService: UserService, private router: Router) { 
    this.userService = userService;
    console.log('cone called');
    // this.profileStatus = this.userService.getprofileDasbordStatus();
  }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        var user_name = this.userDetails.fullName.split(' ')[0];
        localStorage.setItem('user_name', user_name);
      },
      err => {
        console.log(err);

      }
    );

    // console.log('cone called');
    // this.profileStatus = this.userService.getprofileDasbordStatus();
  }

  userProfileStatus(){
    console.log('cone called');
    // this.profileStatus = this.userService.getprofileDasbordStatus();
    this.ngOnInit();
  }
  
//video upload
upload() {
  const file = this.selectedFiles.item(0);
  // /this.userService.uploadfile(file);
}

selectFile(event) {
  this.selectedFiles = event.target.files;
}


//

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  empupload(){
    // this.userService.upload(this.dataArr).subscribe(
    //   res => {
    //      console.log('Hello', res);
    //   },
    //   err => {
    //      console.log('Hi error');
    //   }
    // )
}
// tslint:disable-next-line: member-ordering
public csvRecords: any[] = [];

// tslint:disable-next-line: member-ordering
  @ViewChild('fileImportInput') fileImportInput: any;

  fileChangeListener($event: any): void {

    const text = [];
    const files = $event.srcElement.files;

    if (this.isCSVFile(files[0])) {

      const input = $event.target;
      const reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        const csvData = reader.result;
        const csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

      const headersRow = this.getHeaderArray(csvRecordsArray);

        this.csvRecords = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };

      reader.onerror = function () {
        alert('Unable to read ' + input.files[0]);
      };

    } else {
      alert('Please import valid .csv file.');
      this.fileReset();
    }
  }


  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {


    for (let i = 1; i < csvRecordsArray.length; i++) {
      const data = (<string>csvRecordsArray[i]).split(',');

      // FOR EACH ROW IN CSV FILE IF THE NUMBER OF COLUMNS
      // ARE SAME AS NUMBER OF HEADER COLUMNS THEN PARSE THE DATA
      if (data.length == headerLength) {

// tslint:disable-next-line: no-use-before-declare
        const csvRecord: CSVRecord = new CSVRecord();

        csvRecord.firstName = data[0].trim();
        csvRecord.lastName = data[1].trim();
        csvRecord.email = data[2].trim();
        csvRecord.phoneNumber = data[3].trim();
        csvRecord.title = data[4].trim();
        csvRecord.occupation = data[5].trim();

        this.dataArr.push(csvRecord);
      }
    }
    return this.dataArr;
  }

  // CHECK IF FILE IS A VALID CSV FILE
  isCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  // GET CSV FILE HEADER COLUMNS
  getHeaderArray(csvRecordsArr: any) {
    const headers = (<string>csvRecordsArr[0]).split(',');
    const headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.fileImportInput.nativeElement.value = '';
    this.csvRecords = [];
  }
}
export class CSVRecord {

  public firstName: any;
  public lastName: any;
  public email: any;
  public phoneNumber: any;
  public title: any;
  public occupation: any;

  constructor() {

  }

}
