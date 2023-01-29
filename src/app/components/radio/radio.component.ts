import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() options: Array<string>

  @Input() value: string

  @Input() name: string

  @Output() newItemEvent = new EventEmitter()
  @Output() dec = new EventEmitter()

  radioClick() {
    this.newItemEvent.emit()
  }

  @Input() visible: boolean

  func() {
    this.dec.emit()
  }


 



}
