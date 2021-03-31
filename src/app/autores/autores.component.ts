import { ActivatedRoute } from '@angular/router';
import { BooksService } from './../services/books.service';
import { Component, OnInit } from '@angular/core';
import { Autor } from './autor';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  public author: string = "";
  public libros: Array<any> = [];
  public results: Array<any> = [];
  public autor = new Autor();
  public authorName: string = "";

  constructor(private _bookService: BooksService, private _activatedRoute:ActivatedRoute) {
    this._activatedRoute.params.subscribe(params => {
      this.author = params['author'];
    });
  }

  ngOnInit(): void {
    this.getAutor();
  }

  getAutor(){
    this._bookService.getAutor(this.author).subscribe(data => {
      this.results = data.results;
      this.authorName = this.results[0].book_author;
      for (const res of this.results) {
        this.autor = new Autor();
        this.autor.url = res.url;
        this.autor.publication_dt = res.publication_dt;
        this.autor.byline = res.byline;
        this.autor.book_title = res.book_title;
        this.autor.book_author = res.book_author;
        this.autor.summary = res.summary;
        this.libros.push(this.autor);
      }
    });
  }
}
