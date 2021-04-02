import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FiledServiceService } from '../../services/filed-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  isMobile:any;
  searchForm:FormGroup

  constructor(private filedService:FiledServiceService, private fb:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.isMobile = this.filedService.isMobile;
    this.searchForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      cvv: ['', Validators.required],     
      card: ['', Validators.required]    
     
      });
   
  }

  pay(event){
    
    this.router.navigate([''])
  }

}
