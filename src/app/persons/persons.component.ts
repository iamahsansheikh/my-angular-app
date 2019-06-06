import { PersonService } from './../services/person.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.sass']
})
export class PersonsComponent implements OnInit {

  persons: any[];
  constructor(private service: PersonService) { }

  ngOnInit() {
    this.service.getPersons()
      .subscribe(response => {
        console.log(response);
        this.persons = response.json();
      })
  }

}
