import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent {

  @Input() childData!:string;

  @Output() dataEmitter = new EventEmitter<string>();
  sendData(){

this.dataEmitter.emit('Data From chile'); // for child to parent sending we have to use event emitter
  }
}
