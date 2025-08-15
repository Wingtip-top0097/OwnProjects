import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userForm: any;
  usersdata: any;
  constructor(public fb: FormBuilder, private service: CommonService) {
    this.userForm = this.fb.group({
      id: [""],
      Name: [""],
      Email: [""],
      Mobile: [""],
      Age: [""],
    })

  }

  ngOnInit(): void {
    this.GetAllUsers(); // Call GetAllUsers() when component loads
  }

  SubmitForm() {
    console.log(this.userForm.value);
    var type = this.userForm.value.id == null || this.userForm.value.id == undefined ? "Add" : "Edit";
    this.service.AddUpdateUser(this.userForm.value,type).subscribe(data => {
      if (type == "Add")
        alert("Added");
      else
        alert("Updated");

      this.userForm.reset();
      this.GetAllUsers();
    });
  }

  GetAllUsers() {
    this.service.GetAllUsers().subscribe(data => {
      this.usersdata = data;
      //console.log("Users All data : "+ data);
    });
  }


  DeleteUserById(Id: any) {
    this.service.DeleteUserById(Id).subscribe(data => {
      this.GetAllUsers();
    });
  }

  GetUserById(Id: any) {
    debugger
    this.service.GetUserById(Id).subscribe(data => {
      // console.log("Users single data : "+ data);
   this.userForm.patchValue({
        id: data.id,
        Name: data.Name,
        Email: data.Email,
        Mobile: data.Mobile,
        Age: data.Age

      })
      // this.userForm.id=updateddata.id;
      // this.userForm.Name=updateddata.Name;
      // this.userForm.Email=updateddata.Email;
      // this.userForm.Mobile=updateddata.Mobile;
      // this.userForm.Age=updateddata.Age;
    });
  }


}
