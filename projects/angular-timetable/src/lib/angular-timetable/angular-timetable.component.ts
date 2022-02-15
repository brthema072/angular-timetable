import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-angular-timetable',
  templateUrl: './angular-timetable.component.html',
  styleUrls: ['./angular-timetable.component.css']
})
export class AngularTimetableComponent implements OnInit {

  /**
   * Hora de início do expediente
  */
  @Input() startHourOffice: number = 8;
  /**
   * Hora do fim do expediente
  */
  @Input() endHourOffice: number = 17;

  /**
   * Evento disparado quando o botão com horário do dia é clicado.
  */
  @Output() applyTimeEmitter = new EventEmitter<any>();
  /**
   * Define se ao clicar no botão abrirá um modal
  */
  @Input() openModel: boolean = false;

  @Output() daysOfWeekEmitter = new EventEmitter<any>();

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

  validateDaysOfWeekOnLeftSide(day: number){
    if(day <= 0){
      let auxDay: number = 0;
      let auxMonth: number = 0;

      auxDay = 31 + day
      auxMonth = this.date.getMonth()
      this.headerDays.push(this.formatDateByParameter(auxDay, auxMonth, this.date.getFullYear()))

    }else{
      this.headerDays.push(this.formatDateByParameter(day, this.date.getMonth() + 1, this.date.getFullYear()))
    }
  }
  
  validateMonthsWih31Days(month: number){
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
      return true
    }
    return false
  }

  getDaysOfWeekInLeftSide(day: number){
    for(let i = 0; i < this.date.getDay(); i++){
      day = this.date.getDate() - i
      this.validateDaysOfWeekOnLeftSide(day);
    }
  }

  getDaysOfWeekInRightSide(day: number){
    let count: number = 0;
    let auxDay: number = 0;
    for(let i = this.date.getDay(); i < 6; i++){
      count++;
      day = this.date.getDate() + count

      if((this.date.getMonth() + 1 == 2 && day > 28) ||
          (this.validateMonthsWih31Days(this.date.getMonth() + 1) && day > 31)){
        auxDay++
        this.headerDays.push(this.formatDateByParameter(auxDay, this.date.getMonth() + 2, this.date.getFullYear()))
      }else if(!this.validateMonthsWih31Days(this.date.getMonth() + 1) && day > 30){
        auxDay++
        this.headerDays.push(this.formatDateByParameter(auxDay, this.date.getMonth() + 2, this.date.getFullYear()))
      }else{
        this.headerDays.push(this.formatDateByParameter(day, this.date.getMonth() + 1, this.date.getFullYear()))
      }
    }
  }

  sortDays(headerDays: string[]): string[]{
    let orderedDays = headerDays.sort((a, b) => {
      if(a > b){
        return 1
      }
      if(a < b){
        return -1
      }

      return 0
    })

    return orderedDays.sort((a, b) => {
      let numero1 = +(a[0].toString() + a[1].toString())
      let numero2 = +(b[0].toString() + b[1].toString())

      if((numero1 > 0 && numero1 <= 5) || (numero2 > 0 && numero2 <= 5)){
        if((numero1 > 0 && numero1 <= 5) && (numero2 > 0 && numero2 <= 5) && numero1 > numero2){
          return 1
        }
        return -1
      }

      return 0
    })
  }

  getDaysOfWeek(){
    let day: number = 0

    this.getDaysOfWeekInLeftSide(day);

    this.getDaysOfWeekInRightSide(day);

    this.headerDays = this.sortDays(this.headerDays)

    this.daysOfWeekEmitter.emit(this.headerDays)
  }

  getHoursOfDaysOfWeek(){
    for(let i = this.startHourOffice; i <= this.endHourOffice; i++){
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
    this.applyTimeEmitter.emit({
      day: day,
      hour: hour
    })
  }

}
