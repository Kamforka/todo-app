import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorPickerOption } from './color-picker-option';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  @Input()
  options: ColorPickerOption[];
  @Input()
  selected: ColorPickerOption;

  @Output()
  onChange: EventEmitter<ColorPickerOption> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onColorPick(option: ColorPickerOption) {
    this.onChange.emit(option);
  }
}
