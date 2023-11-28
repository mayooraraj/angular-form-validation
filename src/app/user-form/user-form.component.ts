import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  @ViewChild('userForm') userForm!: NgForm;

  user= {
    username: '',
    email: '',
    address: '',
    dob: new Date(),
    password: '',
    phoneNumber: ''
  };
  

  onSubmit() {
  
    console.log('User details submitted:', this.user);
    alert("user data submited");
    // this.user = {
    //   username: '',
    //   email: '',
    //   address: '',
    //   dob: new Date(),
    //   password: '',
    //   phoneNumber: ''
    // };
    this.userForm.resetForm();
  }
}
