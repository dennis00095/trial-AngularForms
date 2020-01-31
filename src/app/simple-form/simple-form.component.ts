import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <form (submit)="onSearch(searchControl.value);$event.preventDefault();">
    <input #searchControl placeholder="Search here..."/>
    <button> Search </button>
    </form>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  constructor() { }
  

  ngOnInit() {
  }
onSearch(searchText){

  //steps for saerch operation
  console.log(searchText);
}
}
