import { BooksService } from './../services/books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from './list';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public libros: Array<any> = [];
  public list: any = "";
  public bookList = new List();
  public results: Array<any> = [];
  public listTitle: any = "";

  constructor(private _bookService:BooksService, private activatedRoute:ActivatedRoute, private _router:Router) {
    this.activatedRoute.params.subscribe(params => {
      params['list'];
      this.list = params['list'];
    });
  }

  ngOnInit(): void {
    this.getLibros();
  }

  getLibros(){
    this._bookService.getLista(this.list).subscribe(data => {
      this.results = data.results;
      this.listTitle = this.results[0].display_name;
      for (const res of this.results){
        for(const r of res.book_details){
          this.bookList = new List();
          this.bookList.title = r.title;
          this.bookList.description = r.description;
          this.bookList.author = r.author;
          this.bookList.publisher = r.publisher;
          this.libros.push(this.bookList);
        }
      }
    })
  }

  addWish(book:any){
    this._bookService.addWish(book);
  }

  onBack(): void {
    this._router.navigate(['/lists']);
  }
}
