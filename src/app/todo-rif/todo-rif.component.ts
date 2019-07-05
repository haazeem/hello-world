import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-rif',
  templateUrl: './todo-rif.component.html',
  styleUrls: ['./todo-rif.component.css']
})
export class TodoRifComponent implements OnInit {
datefin;

  constructor() { }

  todos= [
    {
      id: 1,
      titre: 'Compléter cours angular	',
      dateAjout: '04/07/2019',
      description: 'lire tous les chapitres de cours'
    },
    {
      id: 2,
      titre: 'Apprendre NodeJs	',
      dateAjout: '05/07/2019',
      description: 'utiliser le framework JS'
    },
    {
      id: 3,
      titre: 'Créer WS avec Express JS	',
      dateAjout: '06/07/2019',
      description: 'Creation des web services'
    }];

  dones= [];
  
  ngOnInit() {
  }
  delete(todo){
    let index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }
  terminate(todo){
    this.delete(todo);
    let d=new Date();
    this.datefin=d.getDay()+"/"+(d.getMonth()+1)+"/"+(d.getFullYear());
    this.dones.push(todo);
  }
  deleteFromDones(todo){
    let index=this.todos.indexOf(todo);
    this.dones.splice(index,1);
  }
}
