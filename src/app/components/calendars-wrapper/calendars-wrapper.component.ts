import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DateInterval } from 'src/app/models/types';
import { isAfterDay, isAfterMonth, isSameDate } from 'src/utils';

@Component({
  selector: 'app-calendars-wrapper',
  templateUrl: './calendars-wrapper.component.html',
  styleUrls: ['./calendars-wrapper.component.css']
})
export class CalendarsWrapperComponent implements OnInit {

  constructor() {
    

   }

   isMouseDown = false

  ngOnInit(): void {

   
 
  }



  @Input() calendarToShowingDate: Date
  @Input() calendarFromShowingDate: Date

  @Input() dateInterval: DateInterval

  @Input() datesTo: any
  @Input() datesFrom: any

  @Input() showTypeMonth: Boolean

  @Output() changeNext = new EventEmitter()
  @Output() changeBack = new EventEmitter()
  @Output() updateDate = new EventEmitter()
  @Output() updateDateInterval = new EventEmitter()

  moveNext() {

    this.changeNext.emit()

    console.log('movewrapper')

  }

  moveBack() {

    this.changeBack.emit()
    console.log('back2')

  }



  updateSelectedDate(date:any) {
    
    console.log('parent', date)
    this.updateDate.emit(date)
  }

  handleMouseUp() {
   
    removeEventListener('mouseup', this.handleMouseUp)
   
    console.log('monthup', this.isMouseDown)
    this.isMouseDown = false
  }

  handleMouseDown(day: Date) {
    this.updateInterval({from: day, to: day})
    addEventListener('mouseup', this.handleMouseUp)
    this.isMouseDown = true
    
  }

  

  handleMouseEnterDay(data: any) {
    console.log(this.isMouseDown)
    if(!this.isMouseDown) return 
    let isLastDay = isSameDate(data.lastDay, data.day, 'day')
    if(isLastDay) {
      setTimeout(()=> this.changeNext.emit(), 1000)
    }
    this.updateInterval({from:this.dateInterval.from, to: data.day})
   
  }

  updateInterval(date: DateInterval) {
    this.updateDateInterval.emit({from:date.from, to:date.to})
    console.log(date, 'UPDATE')
    
  }

  handleMouseEnterMonth(date:Date) {
    console.log('entermonth')
    if (!this.isMouseDown) return

    let monthMoveCondition = this.showTypeMonth && isAfterMonth(this.dateInterval.from, date)
    if(!monthMoveCondition) return
   
    let lastMonth = new Date(this.calendarToShowingDate.getFullYear(), 11)
    let isLastMonth = isSameDate(lastMonth, date, 'month')

    if(isLastMonth) {
      setTimeout(()=>this.changeNext.emit(), 1000)
    }
    this.updateInterval({from: this.dateInterval.from, to: date})
  }


}
