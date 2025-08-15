import { Component } from '@angular/core';

@Component({
  selector: 'app-parentcomp',
  templateUrl: './parentcomp.component.html',
  styleUrls: ['./parentcomp.component.css']
})
export class ParentcompComponent {
  parentData = 'Data from Parent';
  parentreceivedData:string='';


  receiveData(data:string){
    this.parentreceivedData=data;
  }
}
