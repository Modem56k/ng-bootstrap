import { IPerson } from 'host-models';
import { v4 as uuid } from 'uuid';

import { Component, OnInit } from '@angular/core';
import { StorageService } from 'resource-access';
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private person: IPerson;

  constructor(private storageService: StorageService) {

  }

  ngOnInit() { }

  AddPerson() {

    // this.storePerson();
    const person = new Person(uuid(), 'Mary', 'Lou', 'Miss');
    const dom = new Person(uuid(), 'Armando', 'Diaz', 'Jr ');
    const pe = new Person(uuid(), 'super', 'family', 'te');
    this.storePerson(person);
    this.storePerson(dom);
    this.storePerson(pe);

  }

  private storePerson(obj: Person) {
    console.warn(obj.constructor.name);
    this.storageService.AddOrUpdate<Person>(obj);
  }
}

export class Person implements IPerson {
  Id: string;
  GivenName: string;
  FamilyName: string;
  Suffix: string;
  constructor(id: string, givenName: string, familyName: string, suffix: string) {
    this.Id = id;
    this.GivenName = givenName;
    this.FamilyName = familyName;
    this.Suffix = suffix;
  }
}
export class Dog {
  name: string;
}
