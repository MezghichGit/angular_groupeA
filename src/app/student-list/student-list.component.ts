import { Component, OnInit } from '@angular/core';
import {Etudiant} from "../entities";
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  module:string = "Framework JS";
  names:string[]=["Mohamed Amine","Wafa","Ons","Malek"];
  myStudents:Etudiant[]=[new Etudiant("Amine",22),new Etudiant("Wafa",21),new Etudiant("Ons",23),new Etudiant("Malek",24)];
  constructor() {
    console.log("Constructeur");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

}
