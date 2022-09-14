import { BookservicesService } from 'src/app/services/bookservices.service';
import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  books: any = [];
  
  constructor(private bookservice:BookservicesService) { }

  ngOnInit(): void {
    
    this.bookservice.get().subscribe((Request)=>{
      this.books = Request['data']
      // console.log(this.book)
      // this.book=JSON.parse(Request['data'])
    })
    
  }
  delBook(id:any){
    console.log(id)
    console.log(id)
    this.bookservice.del(id).subscribe((Request:any)=>{
      console.log(Request)
      alert(Request.DATA)
    })

  }

}
