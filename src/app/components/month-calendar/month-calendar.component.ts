import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { getMonths,isSameMonth,isAfterMonth,isBeforeMonth } from 'src/utils';

import { DateInterval } from 'src/app/models/types';


@Component({
  selector: 'app-month-calendar',
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.css']
})
export class MonthCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() showingDate: Date
  @Input() leftArrow: boolean
  @Input() rightArrow: boolean

  @Input() dateInterval: DateInterval

  @Output() moveBack = new EventEmitter()
  @Output() moveNext = new EventEmitter()
  @Output() updateInterval = new EventEmitter()
  @Output() handleMouseDown = new EventEmitter()

  @Output() handleMouseEnter = new EventEmitter()

  months = getMonths()

  getMonthClasses(month: number) {
    let now = new Date()
    let date = new Date()
    date.setFullYear(this.showingDate.getFullYear())
    date.setMonth(month)

    if (this.isRangeBoundaryMonth(this.dateInterval, date)) {
      return { 'month-card__month_selected': true }
  
  } 
    return {
      'month-card__month_current': isSameMonth(now,date),
      'month-card__month_in-range': this.isInRangeMonth(this.dateInterval,date)
    } 
  }

  NextYear() {
    this.moveNext.emit()
  }

  PreviousYear() {
    this.moveBack.emit()
  }


  getMonthIndex(month: string) {
    return this.months.indexOf(month)
  }

  selectMonth(month:number) {
    let date = new Date()
    date.setFullYear(this.showingDate.getFullYear())
    date.setMonth(month)
    console.log('child')
    this.updateInterval.emit({from:date, to:date})
  }

  isRangeBoundaryMonth(dateInterval: DateInterval, date: Date ):boolean {
    return isSameMonth(dateInterval.from, date) || isSameMonth(dateInterval.to,date)
  }

  isInRangeMonth(dateInterval: DateInterval, date: Date):boolean {
    return isAfterMonth(dateInterval.from, date) && isBeforeMonth(dateInterval.to, date)
}

mouseDown(month: number) {

  let newDate = new Date()
  newDate.setFullYear(this.showingDate.getFullYear())
  newDate.setMonth(month)
  this.handleMouseDown.emit(newDate)
}

mouseEnter(month: any) {
  let newDate = new Date()
  newDate.setFullYear(this.showingDate.getFullYear())
  newDate.setMonth(month)

  if (isAfterMonth(this.dateInterval.from, newDate)) {
    console.log('true')
    this.handleMouseEnter.emit(newDate)

  }else {
    console.log('false')
  }

}

 








}
