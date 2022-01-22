import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-angular-timetable',
  templateUrl: './angular-timetable.component.html',
  styleUrls: ['./angular-timetable.component.css']
})
export class AngularTimetableComponent implements OnInit {

  /**
   * Hora de início do expediente
   */
  @Input() hourOfficeBeginning: number = 8;
  /**
   * Hora do fim do expediente
   */
  @Input() hourOfficeEnding: number = 17;

  headers: string[] = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
  headerDays: string[] = []
  hoursOfDayOfWeek: string[] = [];

  dateHeader!: string;
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.formatDate()
    this.getDaysOfWeek()
    this.getHoursOfDaysOfWeek()
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
    if(this.headers[this.date.getDay() == 0 ? -1 : this.date.getDay() - 1] == undefined){
      return "Domingo"
    }

    return this.headers[this.date.getDay() == 0 ? -1 : this.date.getDay() - 1]
  }

  getDaysOfWeekInLeftSide(day: number){
    for(let i = 0; i < this.date.getDay(); i++){
      day = this.date.getDate() - i
      this.headerDays.push(this.formatDateByParameter(day, this.date.getMonth() + 1, this.date.getFullYear()))
    }
  }

  getDaysOfWeekInRightSide(day: number){
    let count: number = 0;
    for(let i = this.date.getDay(); i < 6; i++){
      count++;
      day = this.date.getDate() + count
      this.headerDays.push(this.formatDateByParameter(day, this.date.getMonth() + 1, this.date.getFullYear()))
    }
  }

  sortDays(headerDays: string[]): string[]{
    return headerDays.sort()
  }

  getDaysOfWeek(){
    let day: number = 0

    this.getDaysOfWeekInLeftSide(day);

    this.getDaysOfWeekInRightSide(day);

    this.headerDays = this.sortDays(this.headerDays)
  }

  getHoursOfDaysOfWeek(){
    for(let i = this.hourOfficeBeginning; i <= this.hourOfficeEnding; i++){
      this.hoursOfDayOfWeek.push(this.formatHours(i))
      this.hoursOfDayOfWeek.push(this.formatHalfHours(i))
    }

  }

  formatHalfHours(hour: number): string{
    if(hour <= 9){
      return "0" + hour + ":30"
    }

    return hour + ":30"
  }

  formatHours(hour: number): string{
    if(hour <= 9){
      return "0" + hour + ":00"
    }

    return hour + ":00"
  }

  marcarHora(day: string, hour: string){
    console.log(day)
    console.log(hour)
  }

}
