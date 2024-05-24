import { Component, Input, OnInit } from '@angular/core';
import { conferencia } from '../conferencias-list/conferencia';

@Component({
  selector: 'app-conferencias-detail',
  templateUrl: './conferencias-detail.component.html',
  styleUrls: ['./conferencias-detail.component.css']
})
export class ConferenciasDetailComponent implements OnInit {

  @Input() DetailConferencia!:conferencia;
  constructor() { }

  ngOnInit() {
  }

}
