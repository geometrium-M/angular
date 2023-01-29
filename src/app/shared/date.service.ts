import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: BehaviorSubject<Date> = new BehaviorSubject(new Date())

  changeMonthNext() {
    const value = new Date(this.date.value)
    value.setMonth(value.getMonth()+1)
    this.date.next(value)
  }

  changeMonthBack() {
    const value = new Date(this.date.value)
    value.setMonth(value.getMonth()-1)
    this.date.next(value)
  }

  changeYearNext() {
    const value = new Date(this.date.value)
    value.setFullYear(value.getFullYear() + 1)
    this.date.next(value)
  }

  changeYearBack() {
    const value = new Date(this.date.value)
    value.setFullYear(value.getFullYear() - 1)
    this.date.next(value)
  }

  updateDate(date: Date) {
    this.date.next(date)
    console.log(this.date.value)

  }
}