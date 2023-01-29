import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { DateInterval } from 'src/app/models/types';


interface Options {
  value: string;
  key: string | undefined;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() showMonthsType: boolean;
  @Input() currentDate: Date;
  @Input() selectedOption: string | undefined;


  @Output() updateDateInterval = new EventEmitter()
  @Output() updateSelectedOption = new EventEmitter()


  dayOptions: Options[] = [
    {value:'Today', key: 'showToday'},
    {value:'Yesterday', key: 'showYesterday'},
    {value:'Last 7 days', key: 'showWeek'},
    {value:'last 14 days', key: 'show14Days'},
    {value:'Last 30 days', key: 'showMonth'},
    {value:'Whole period', key: 'showWholePeriod'},
    {value:'Custom', key: undefined}
]

monthOptions: Options[] = [
    {value:'This Month', key:'showThisMonth'},
    {value:'Last Month', key:'showLastMonth'},
    {value:'Last 3 Months', key:'showThreeMonths'},
    {value:'Last 6 Months',key:'showSixMonths'},
    {value:'Last 12 Months', key:'showYear'},
    {value:'Custom', key:undefined}
]

handleOptionClick(option: string | undefined) {
 
  this.updateIntervalByOption(option)
  this.updateSelectedOption.emit(option)
  console.log(option)
}

// updateInterval(newDate: Date) {
//   this.updateDateInterval.emit(newDate)
//   console.log('up')
// }


updateInterval(date: DateInterval) {
  this.updateDateInterval.emit({from:date.from, to:date.to})
  console.log(date)
  // if(to === 0) {
  //   this.dateInterval.from = from
  //   this.dateInterval.to = from

  // }else {
  //   this.dateInterval.from = from
  //   this.dateInterval.to = to
  // }

  // console.log(this.dateInterval.from, this.dateInterval.to)

  
}

getOptionClasses(option:any) {

  return {
    'calendar-sideBar__item': true,
    "calendar-sideBar__item_selected": option === this.selectedOption 
  }



}





updateIntervalByOption(option: string | undefined) {
  let newDate = new Date()
  switch(option) {

    case 'showToday' :
     
      this.updateInterval({from:newDate, to:newDate})
      break;

    case 'showYesterday': 
   
      newDate.setDate(newDate.getDate() - 1)
      this.updateInterval({from:newDate, to:newDate})
      break;

    case 'showWeek':
      newDate.setDate(newDate.getDate() - 7)
      
      this.updateInterval({from:newDate, to: new Date()})
      break;

    case 'show14Days' :
      newDate.setDate(newDate.getDate() - 14) 
      this.updateInterval({from:newDate, to: new Date()})
      break;
    
    case 'showMonth' :
      newDate.setDate(newDate.getDate() - 30)
      this.updateInterval({from:newDate, to: new Date()})
      break;
    
    case 'showWholePeriod':
      newDate = new Date(newDate.getFullYear(), 0 ,1)
      this.updateInterval({from:newDate, to: new Date()})
      break;

    case 'showThisMonth' :
      this.updateInterval({from:newDate, to:newDate})
      break;

    case 'showLastMonth': 
      newDate.setMonth(newDate.getMonth() - 1)
      this.updateInterval({from:newDate, to:newDate})
      break;
    
    case 'showThreeMonths':
      newDate.setMonth(newDate.getMonth() - 3)
      this.updateInterval({from:newDate, to: new Date()})
      break;
    
    case 'showSixMonths':
      newDate.setMonth(newDate.getMonth() - 6)
      this.updateInterval({from:newDate, to: new Date()})
      break;
    
    case 'showYear':
      newDate.setMonth(newDate.getMonth() - 12)
      this.updateInterval({from:newDate, to: new Date()})
      break;
  }

}
}
