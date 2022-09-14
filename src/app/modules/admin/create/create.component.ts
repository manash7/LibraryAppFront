import { BookservicesService } from './../../../services/bookservices.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  bookform = new FormGroup({
    title: new FormControl,
    author: new FormControl,
    category: new FormControl,
    price:new FormControl,
  })

  constructor(private router:Router,private bookservice:BookservicesService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.bookform.valid){
      this.bookservice.add(this.bookform.value).subscribe((Request:any)=>{
        alert(Request.DATA)
        this.bookform.reset()
      })
    }
  }
  viewBooks(){
    this.router.navigate([''])
  }

}
