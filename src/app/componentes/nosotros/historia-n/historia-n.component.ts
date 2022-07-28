import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-historia-n',
  templateUrl: './historia-n.component.html',
  styleUrls: ['./historia-n.component.css']
})
export class HistoriaNComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
