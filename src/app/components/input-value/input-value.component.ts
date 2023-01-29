import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.css']
})
export class InputValueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() currentDateString: string
  @Input() showTimeType: Boolean

}
