import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { FiledServiceService } from '../../services/filed-service.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  isStarted:boolean=false;
  searchForm:FormGroup;
  firstForm:FormGroup;
 
  @Input() isMobile:any;
  constructor(private fb:FormBuilder, private router:Router, private filedService:FiledServiceService) { }

  ngOnInit() {

    this.firstForm = this.fb.group({
      radio: ['', Validators.required],
      budget: ['', Validators.required]
    })

    this.searchForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],     
      monthlyBudget: ['', Validators.required],     
      country:['', Validators.required],
      phone:['', Validators.required]
      });
   
  }

  start(event){
    this.isStarted=true;
    console.log(this.firstForm)
  }

  freeTrial(event){
    console.log(this.searchForm);
    this.filedService.user.radio = this.firstForm.value.radio;
    this.filedService.user.budget = this.firstForm.value.budget;
    this.filedService.user.firstName = this.searchForm.value.firstName;
    this.filedService.user.lastName = this.searchForm.value.lastName;
    this.filedService.user.email = this.searchForm.value.email;
    this.filedService.user.monthlyBudget = this.searchForm.value.monthlyBudget;
    this.filedService.user.country = this.searchForm.value.country;
    this.filedService.user.phone = this.searchForm.value.phone;
    this.filedService.isMobile = this.isMobile;

    this.filedService.postData(this.filedService.user).subscribe((data)=>{
      console.log(data);
    }, error => {
      console.log(error);
    })
   
    this.router.navigate(['user']);
  }

}
