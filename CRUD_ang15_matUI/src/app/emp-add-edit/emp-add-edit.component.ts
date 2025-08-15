import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {
educationlst:string[]=['Matric','Diploma','Intermediate','Graduate','Post-Graduate']
empForm: FormGroup;


constructor(private _fb:FormBuilder){
this.empForm=this._fb.group({
firstName:'',
lastName:'',
email:'',
dob:'',
gender:'',
education:'',
company:'',
experience:'',
package:''

})

}

onFormSubmit(){
  alert(JSON.stringify(this.empForm));
}

}

