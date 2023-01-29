import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-general-config',
  templateUrl: './general-config.component.html',
  styleUrls: ['./general-config.component.css']
})
export class GeneralConfigComponent implements OnInit {

  constructor() { }
  selectedType: string
  selectedShowTime: string
  selectedMode: string

  ngOnInit(): void {
    this.selectedType = this.showTypeDayMonth ? 'Month': 'Day'
    this.selectedShowTime = this.showTime ? 'Yes': 'No'
    this.selectedMode = this.showTypeMode ? 'Multi': 'Single'
  }

  @Input() showTime: Boolean
  @Input() showTypeDayMonth: Boolean
  @Input() showTypeMode: Boolean 

  @Output() updateShowTime = new EventEmitter()
  @Output() updateTypeValue = new EventEmitter()
  @Output() updateTypeMode = new EventEmitter()

  radioTimeClick() {
    this.updateShowTime.emit()
  }

  radioTypeClick() {
    this.updateTypeValue.emit()
  }

  radioModeClick() {
    this.updateTypeMode.emit()
  }




optionsTime = ['Yes', 'No']
optionsType = ['Month', 'Day']
optionsMode = ['Single', 'Multi']

visible = true

change() {
  this.visible = !this.visible
}

}
