import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  headers: string[] = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
  headersDay: string[] = []

  dateHeader!: string;
  date: Date = new Date();;

  constructor() { }

  ngOnInit(): void {
    this.formatDate()
    this.getDayOfWeek()
  }

  formatDate(){
    this.dateHeader = (
      this.date.getDate() <= 9 ? "0" + this.date.getDate() : this.date.getDate()
    ) + "/" + (
      (this.date.getMonth() + 1) <= 9 ? "0" + (this.date.getMonth() + 1) : this.date.getMonth() + 1
    ) + "/" + this.date.getFullYear()
  }

  formatDateByParameter(day: number, month: number, year: number): string{
    return ( day <= 9 ? "0" + day : day
      ) + "/" + (
        month <= 9 ? "0" + month : month
      ) + "/" + year
  }

  getNameDayOfWeek(): string{
    return this.headers[this.date.getDay() == 0 ? 1 : this.date.getDay() - 1]
  }

  getDayOfWeek(){
    let day: number = 0

    for(let i = 0; i < this.date.getDay(); i++){
      day = this.date.getDate() - i
      this.headersDay.push(this.formatDateByParameter(day, this.date.getMonth() + 1, this.date.getFullYear()))
    }

    let count: number = 0;
    for(let i = this.date.getDay(); i < 6; i++){
      count++;
      day = this.date.getDate() + count
      this.headersDay.push(this.formatDateByParameter(day, this.date.getMonth() + 1, this.date.getFullYear()))
    }

    this.headersDay = this.sortDays(this.headersDay)
  }

  sortDays(headersDay: string[]): string[]{
    return headersDay.sort()
  }

}
