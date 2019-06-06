import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-person',
  templateUrl: './common-person.component.html',
  styleUrls: ['./common-person.component.sass']
})
export class CommonPersonComponent implements OnInit {

  @Input() personList: any[];

  constructor() { 
  }

  ngOnInit() {
  }

}
