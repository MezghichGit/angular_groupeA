import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipeService } from "../services/equipe.service";
@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

  constructor(private service: EquipeService, private router : Router) { }

  ngOnInit(): void {
  }


  onSubmit(team: NgForm) {
    this.service.createEquipe(team).subscribe(response => {
      this.router.navigate(['equipes']);
      //console.log(response);
    });

    }
}
