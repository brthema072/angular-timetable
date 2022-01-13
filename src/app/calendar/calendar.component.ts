import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  headers: string[] = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta=feira", "Sábado"]

  dateHeader!: string;
  date: Date = new Date();;

  constructor() { }

  ngOnInit(): void {
    this.formatDte()
  }

  formatDte(){
    this.dateHeader = (
      this.date.getDate() <= 9 ? "0" + this.date.getDate() : this.date.getDate()
    ) + "/" + (
      (this.date.getMonth() + 1) <= 9 ? "0" + (this.date.getMonth() + 1) : this.date.getMonth() + 1
    ) + "/" + this.date.getFullYear()
  }

}
