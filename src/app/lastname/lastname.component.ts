import { PersonService } from './../services/person.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NameValidators } from '../name.validators';

@Component({
  selector: 'app-lastname',
  templateUrl: './lastname.component.html',
  styleUrls: ['./lastname.component.sass']
})
export class LastnameComponent implements OnInit {
  inputLastName: string;
  persons: any[];

  form = new FormGroup({
    lastname: new FormControl('', [
      Validators.required,
      NameValidators.cannotContainSpace
    ])
  })
  constructor(private service: PersonService) { }

  ngOnInit() {
  }

  get lastname(){
    return this.form.get('lastname');
  }


  searchByLastName() {
    console.log('helo');
    this.inputLastName = this.form.get('lastname').value;
    console.log(this.inputLastName);

    this.service.getPersonsByLastName(this.inputLastName)
      .subscribe(response => {
        console.log(response);
        this.persons = response.json();
      })
  }

}
