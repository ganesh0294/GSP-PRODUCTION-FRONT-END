import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Supers } from './super.model';
// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // superAdminss : Supers = {
  //   _id: '',
  //   firstname:'',
  //   lastname:'',
  //   email:'',
  //   password:'',
  //   position: '',
  //   department: '',
  //   mobile: ''
  // };
 
  selectedUser: User = {
    _id: '',
    fullName: '',
    email: '',
    password: '',
    position: '',
    department: '',
    mobile: ''

  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
  }

  getLogin() {
    return this.http.get(environment.apiBaseUrl + '/login', this.noAuthHeader).subscribe(res => {
      console.log('hello', res);
    }, error => {
      console.log('hi', error);
    });
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }


  getToken() {
    return localStorage.getItem('token');
  }
  getUserPayload() {
    const token = this.getToken();
    if (token) {
      const userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }
  isLoggedIn() {
    const userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.iat <= Date.now() / 1000;
    } else {
      return false;
    }
  }

  //post user
  postUser(user: User){
    console.log("getSuperAdminProfile user : ", user);

    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }

  postUserForgetPassword(user: User){
    console.log("postUserForgetPassword user : ", user);
    return this.http.post(environment.apiBaseUrl+'/userForgotPassword',user,this.noAuthHeader);
  }
  


  getSuperAdminProfile() {
    let user_id = localStorage.getItem('user_id');
    console.log("getSuperAdminProfile user id : ", user_id);
    return this.http.post(environment.apiBaseUrl + '/userProfile',{user_id:user_id});
  }

  // getAllAdminsData() {
  //   return this.http.get(environment.apiBaseUrl + '/userslist');
  // }

  getUserProfile() {
    let user_id = localStorage.getItem('user_id');
    console.log("getUserProfile user id : ", user_id);
    return this.http.post(environment.apiBaseUrl + '/userProfile', {user_id:user_id});
  }

  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_data');
    localStorage.clear();
  }
  //post user

  
  changeUserPassword(user: User){
    console.log("postUserForgetPassword user : ", user);
    return this.http.post(environment.apiBaseUrl+'/changeUserPassword',user,this.noAuthHeader);
  }

}
