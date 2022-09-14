import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BookservicesService } from 'src/app/services/bookservices.service';
import { UserservicesService } from './../../../services/userservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  bookId: any;
  bookform!: FormGroup;
  constructor(private route:ActivatedRoute,private router:Router, private bookservice:BookservicesService,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['bookId'];
    this.bookform = this.formBuilder.group({
      id: new FormControl(''),
      title: new FormControl(''),
      author:new FormControl(''),
      category: new FormControl(''),
      price: new FormControl('')
    })
    this.getBook()
  }
  getBook(){
    this.bookservice.getBook(this.bookId).subscribe((Request)=>{
      console.log(Request) 
      this.bookform.get('id')?.setValue(Request['data'].id)
      this.bookform.get('title')?.setValue(Request['data'].title)
      this.bookform.get('author')?.setValue(Request['data'].author)
      this.bookform.get('category')?.setValue(Request['data'].category)
      this.bookform.get('price')?.setValue(Request['data'].price)      
    })
  }
  onSubmit(){
    this.bookservice.edit(this.bookform.value).subscribe((Request:any)=>{
      alert(Request.DATA)
    })
    this.router.navigate([''])
  }
}
