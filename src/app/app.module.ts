import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RadioComponent } from './components/radio/radio.component';
import { GeneralConfigComponent } from './components/general-config/general-config.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { InputValueComponent } from './components/input-value/input-value.component';
import { CalendarsWrapperComponent } from './components/calendars-wrapper/calendars-wrapper.component';
import { DateCalendarComponent } from './components/date-calendar/date-calendar.component';
import { MonthCalendarComponent } from './components/month-calendar/month-calendar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    RadioComponent,
    GeneralConfigComponent,
    DatePickerComponent,
    InputValueComponent,
    CalendarsWrapperComponent,
    DateCalendarComponent,
    MonthCalendarComponent,
    SideBarComponent
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
