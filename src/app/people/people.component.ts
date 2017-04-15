import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

import { Person } from './person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {
  items: Person[];
  selected: Person;
  @Input() name: string;
  @Input() age: number;

  constructor(
    private service: PeopleService
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.service.find()
    .then((items) => {
      this.items = items;
    });
  }
  select(item: Person) {
    this.selected = item;
    this.name = this.selected.name;
    this.age = this.selected.age;
  }
  deselect() {
    this.selected = null;
  }
  isSelected(item: Person) {
    return this.selected && this.selected === item;
  }
  reset() {
    this.name = null;
    this.age = null;
    this.deselect();
  }
  create() {
    this.service.create(this.name || 'Unknown', this.age)
    .then(() => {
      this.getItems();
      this.reset();
    });
  }
  update(name, age) {
    this.selected.name = name;
    this.selected.age = age;
    this.service.update(this.selected)
    .then(() => {
      this.getItems();
      this.reset();
    })
  }
  delete(item: Person) {
    this.service.delete(item._id)
    .then(() => {
      this.items = this.items.filter(i => i !== item);
      if (this.selected === item) {
        this.reset();
      }
    });
  }
}
