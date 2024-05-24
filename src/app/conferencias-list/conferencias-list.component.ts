import { Component, OnInit } from '@angular/core';
import { conferencia } from './conferencia';
import { ConferenciaService } from './conferencia.service';

@Component({
  selector: 'app-conferencias-list',
  templateUrl: './conferencias-list.component.html',
  styleUrls: ['./conferencias-list.component.css']
})
export class ConferenciasListComponent implements OnInit {

  conferencias: Array<conferencia> = []
  count: number = 0;
  selected:boolean = false;
  selectedConference!: conferencia;
  constructor(private conferenciaService:ConferenciaService) { }

  getConferencias(conferenciaService:ConferenciaService){
      this.conferenciaService.getConferencias().subscribe((conferencias) => this.conferencias=conferencias)
  }

  countConferencias(conferencias: Array<conferencia>){
    let count:number = 0;
    let currentDate = new Date();
    
    for (let i:number =0;i<conferencias.length;i++){
      let date = new Date(conferencias[i].starts);
    if (date >= currentDate){
        count++;
      }
    }
    this.count=count;
  }

  onSelected(conferencia:conferencia){
    this.selected=true;
    this.selectedConference=conferencia;
  }

  ngOnInit() {
    this.getConferencias(this.conferenciaService);
    this.countConferencias(this.conferencias);
  }

}
