import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styles: []
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  public BookTitle :string;
  public BookAuthor :string;
  public BookNoOfPages :number;

  ngOnInit() {
  }
  onSubmit(form){
    //required submit operations
    console.log(form.value);
    console.log(form.valid);
  }
    
  
}
