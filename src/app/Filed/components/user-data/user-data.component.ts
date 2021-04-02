import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiledServiceService } from '../../services/filed-service.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  data:any;
  isMobile:any;
  length:any;
  userdata:any;

  constructor(private filedService:FiledServiceService, private router:Router) { }

  ngOnInit() {
    this.getUserDetails();
    this.isMobile = this.filedService.isMobile;
   
  }

  getUserDetails(){
    this.filedService.getData().subscribe((data)=>{
      this.userdata = data;      
      this.length = Object.keys(this.userdata).length;
      console.log(this.length);
      this.data = this.userdata[this.length-1];
      console.log(this.data);
    }), error=>{
      console.log(error);
    }
  }

  payment(event){
    this.router.navigate(['pay']);
  }

}
