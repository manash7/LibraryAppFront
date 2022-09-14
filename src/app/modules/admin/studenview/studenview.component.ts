import { BookservicesService } from './../../../services/bookservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studenview',
  templateUrl: './studenview.component.html',
  styleUrls: ['./studenview.component.css']
})
export class StudenviewComponent implements OnInit {
  books: any = [];
  constructor(private bookservice:BookservicesService) { }

  ngOnInit(): void {
    this.bookservice.get().subscribe((Request)=>{
      this.books = Request['data']
    })
  }

}
