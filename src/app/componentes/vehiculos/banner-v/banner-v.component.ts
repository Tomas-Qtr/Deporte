import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-banner-v',
  templateUrl: './banner-v.component.html',
  styleUrls: ['./banner-v.component.css']
})
export class BannerVComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
