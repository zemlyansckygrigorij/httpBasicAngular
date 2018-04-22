import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-n1',
  templateUrl: './n1.component.html',
  styleUrls: ['./n1.component.css'],

})

export class N1Component implements OnInit {

  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
  ];

  constructor() {}

  ngOnInit() {}


}

