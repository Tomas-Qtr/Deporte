import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-somos-n',
  templateUrl: './somos-n.component.html',
  styleUrls: ['./somos-n.component.css']
})
export class SomosNComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
