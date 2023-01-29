import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';

import { DateInterval } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class DateIntervalService {
  now = new Date()
  dateInterval = new DateInterval(this.now, this.now)
  date: BehaviorSubject< DateInterval> = new BehaviorSubject(this.dateInterval)

  updateDateInterval(date: DateInterval) {
    this.dateInterval.from = date.from
    this.dateInterval.to = date.to
  }
  
}