import { Component, OnInit, Input, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';


import { formatDateTitle, formatDateFull } from 'src/utils';

import { DateService } from 'src/app/shared/date.service';

import { getAllDaysInMonth } from 'src/utils';
import { DateIntervalService } from 'src/app/shared/dateInterval.service';
import { DatePipe } from '@angular/common';
import { DateInterval } from 'src/app/models/types';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent  {

  calendarFrom: Date
  datesTo: any
  datesFrom: any
  calendarFromShowingDate: any
  currentDateString: any
  dateIntervalTitle: string
  visible = true
  selectedOption: string | undefined = undefined

  @Input() showTime: boolean
  @Input() showTypeDayMonth: boolean
  @Input() showTypeMode: boolean

  constructor(public dateService: DateService, public DateIntervalService: DateIntervalService ) {
    console.log(dateService.date.value)
  }

  ngOnInit() {
    this.dateIntervalTitle = this.showTypeDayMonth ?  formatDateTitle(this.dateService.date.value) : formatDateFull(this.dateService.date.value)
    

  
  }

  ngOnChanges() {
    this.generateInputDate()
   this.selectedOption = undefined
    this.dateService.date.subscribe(this.generateCalendarFrom.bind(this))
    this.dateService.date.subscribe(this.generateMonthDaysTo.bind(this))
    this.dateService.date.subscribe(this.generateMonthDaysFrom.bind(this))
 
  }

  generateCalendarFrom() {
    let el = new Date(this.dateService.date.value)

    if(this.showTypeDayMonth) {
      el.setFullYear(el.getFullYear() - 1)
    }
    else {
      el.setMonth(el.getMonth() - 1)
    }
    this.calendarFrom = el
  }

  generateMonthDaysFrom() {
    let days = getAllDaysInMonth(this.calendarFrom)
    this.datesFrom = days
  }

  generateMonthDaysTo() {
    let days = getAllDaysInMonth(this.dateService.date.value)
    this.datesTo = days
  }

  moveNext() {
    if(this.showTypeDayMonth) {
      this.dateService.changeYearNext()
    } else {
      this.dateService.changeMonthNext()
    }
  }

  moveBack() {
    if(this.showTypeDayMonth) {
      this.dateService.changeYearBack()
    } else {
      this.dateService.changeMonthBack()
    }
  }

  generateInputDate() {

    
    
    let value =  this.showTypeDayMonth ? ((this.DateIntervalService.dateInterval.from === this.DateIntervalService.dateInterval.to) ? 
      formatDateTitle(this.DateIntervalService.dateInterval.from) : 
      `${formatDateTitle(this.DateIntervalService.dateInterval.from)} - ${formatDateTitle(this.DateIntervalService.dateInterval.to)}`) :

    (this.DateIntervalService.dateInterval.from === this.DateIntervalService.dateInterval.to) ? formatDateFull(this.DateIntervalService.dateInterval.to,{
      hideTime: !this.showTime
    }): `${formatDateFull(this.DateIntervalService.dateInterval.from, {
      hideTime: !this.showTime
    })}- ${formatDateFull(this.DateIntervalService.dateInterval.to, {
      hideTime: !this.showTime
    })}`

    this.dateIntervalTitle = value

  }



  updateDate(dateInterval: DateInterval) {
  
    this.DateIntervalService.updateDateInterval(dateInterval)
    this.generateInputDate()
    console.log('selectDay')
   
  }
  
  updateSelectedOption(option:string) {
    this.selectedOption = option
    this.dateService.updateDate(this.DateIntervalService.dateInterval.to)
  }
}
