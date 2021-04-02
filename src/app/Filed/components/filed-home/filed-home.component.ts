import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filed-home',
  templateUrl: './filed-home.component.html',
  styleUrls: ['./filed-home.component.css'],
  host: {
    "(window:resize)": "onWindowResize($event)"
  }
})
export class FiledHomeComponent implements OnInit {

  width: number = window.innerWidth;
  height: number = window.innerHeight;
  isMobile: boolean = false;
  mobileWidth: number = 760;
  constructor() { }

  ngOnInit() {
    this.isMobile = this.width < this.mobileWidth;
  }

  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
  }
}
