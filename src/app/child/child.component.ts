import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentInputData:string = '';
  @Output() childToParent: EventEmitter<string> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }

  SendDataToParent() {
    this.childToParent.emit('Data from child to parent');
  }
}