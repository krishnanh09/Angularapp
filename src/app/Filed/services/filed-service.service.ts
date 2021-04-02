import { Injectable } from '@angular/core';
import {userdata} from '../models/userdata';
import { HttpClient } from '@angular/common/http';
import { serviceContract } from '../models/serviceContract';


@Injectable({
  providedIn: 'root'
})
export class FiledServiceService {
  user:userdata= new userdata();
  isMobile:any;
  requestUrl:any="http://localhost:3000/data"
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<serviceContract>(this.requestUrl);
  }

  postData(requestBody){
    return this.http.post<serviceContract>(this.requestUrl,requestBody);
  }
}
