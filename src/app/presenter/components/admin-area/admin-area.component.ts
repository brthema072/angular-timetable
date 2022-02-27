import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.css']
})
export class AdminAreaComponent implements OnInit, OnChanges {

  @Input() agendas: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
  }


  checkFutureDate(agenda: any): string{
    const today = new Date()
    let strToday: String = ""

    strToday = new Date(today.toDateString()).getDate().toString().padStart(2, "0") + "/" + (new Date(today.toDateString()).getMonth() + 1).toString().padStart(2, "0")
        + "/" + new Date(today.toDateString()).getFullYear()

    if(agenda.day <= strToday){
      return "past"
    } else if(agenda.day == strToday){
      return "now"
    }

    return "future";
  }

}
