
import { Component, OnInit,Input, OnChanges, Output, EventEmitter } from '@angular/core';


import { formatDateTitle,getAllDaysInMonth, isSameDay,isAfterDay,isBeforeDay } from '../../../utils'

import { DateService } from 'src/app/shared/date.service';

import { DateInterval } from 'src/app/models/types';

@Component({
  selector: 'app-date-calendar',
  templateUrl: './date-calendar.component.html',
  styleUrls: ['./date-calendar.component.css']
})
export class DateCalendarComponent implements OnInit {

  constructor(public dateService: DateService) {
  }

  ngOnInit(): void {
   
  }

  weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  showDateObj: string

  @Input() showingDate: Date
  @Input() leftArrow: Boolean
  @Input() rightArrow: Boolean
  @Input() days: any
  @Input() dateInterval: DateInterval

 
  @Output() moveBack = new EventEmitter()
  @Output() moveNext = new EventEmitter()

  @Output() updateDay = new EventEmitter()

  @Output() updateInterval = new EventEmitter()

  @Output() handleMouseDown = new EventEmitter()
  @Output() handleMouseEnter = new EventEmitter()
 
  previousPage() {
    this.moveBack.emit()
  }

  
  nextPage() {
    this.moveNext.emit()
  }


  getDateClasses(day: Date) {
    const now = new Date()

    if (this.isRangeBoundary(this.dateInterval, day)) {
      return { 'selected-date': true }
  } 

    return {
        'not-current-month-day': this.showingDate.getMonth() !== day.getMonth(),
        'current-date': isSameDay(now,day),
        'range-date': this.isInRange(this.dateInterval, day)
    }
  }

  selectedDay(date:Date) {
    this.updateInterval.emit({from:date, to:date})
   
  }

  isRangeBoundary(dateInterval: DateInterval, date: Date): boolean {
    return isSameDay(dateInterval.from, date) || isSameDay(dateInterval.to, date)
}

isInRange(dateInterval:DateInterval, date: Date):boolean {
  return isAfterDay(dateInterval.from, date) && isBeforeDay(dateInterval.to,date)
}

mouseDown(day:Date) {
  this.handleMouseDown.emit(day)
}

mouseEnter(day:Date) {
  console.log('dateENTER')
  this.handleMouseEnter.emit({day:day, lastDay:this.days[this.days.length - 1]})
}


}
