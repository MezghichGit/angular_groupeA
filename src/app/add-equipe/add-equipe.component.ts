import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(team: NgForm) {
    console.log(team.value.name);  // { first: '', last: '' }
    console.log(team.value.country);  // false
  }
}
