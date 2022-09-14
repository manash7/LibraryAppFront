import { UserservicesService } from './../../services/userservices.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[ UserservicesService ]
})
export class SignupComponent implements OnInit {
  signupForm= new FormGroup({
    first_name: new FormControl,
    last_name: new FormControl,
    email: new FormControl,
    password:new FormControl
  })
  constructor(private userservice:UserservicesService) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    // var json = JSON.serialize(this.signupForm.value);
    if(this.signupForm.valid){
      // console.log(this.signupForm.value)
      this.userservice.addUsers(this.signupForm.value).subscribe((Response:any)=>{
        alert(Response.DATA)
      })
      this.signupForm.reset()
    }
  }


}
