import { PersonService } from './../services/person.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NameValidators } from '../name.validators';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.sass']
})
export class NameComponent implements OnInit {

  inputFirstName: string;
  persons: any[];

  form = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      NameValidators.cannotContainSpace
    ])
  });

  constructor(private service: PersonService) { }

  ngOnInit() {

  }

  get firstname() {
    return this.form.get('firstname');
  }

  searchByFirstName() {
    this.inputFirstName = this.form.get('firstname').value;

    this.service.getPersonsByFirstName(this.inputFirstName)
      .subscribe(response => {
        console.log(response);
        this.persons = response.json();
      })
  }

}
