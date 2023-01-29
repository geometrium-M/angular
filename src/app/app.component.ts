import { Component } from '@angular/core';

import { DateService } from './shared/date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

showTimeType: boolean = true

showTypeDayMonth: boolean = true

showTypeMode: boolean = true

showTypeTheme: boolean = true
 

  name :string = 'radioColor'

  optionsTheme: Array<string> =  ['light', 'dark']

 

  selectedTheme: string =  this.showTypeTheme ? 'light': 'dark'

  updateShowTypeTheme() {
    this.showTypeTheme = !this.showTypeTheme
    document.body.classList.toggle('dark');

    
  }

  updateShowTimeType() {
    console.log(this.showTimeType)
    this.showTimeType = !this.showTimeType
  }

  updateShowMonthType() {
    this.showTypeDayMonth = !this.showTypeDayMonth
  }

 
    
     

}
