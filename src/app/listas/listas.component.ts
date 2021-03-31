import { BooksService } from './../services/books.service';
import { Component, OnInit } from '@angular/core';
import { Lista } from './lista';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  public title: string = 'New York Times Book Lists';

  public listas: Array<any> = [];
  public lista = new Lista();
  public results: Array<any> = [];


  constructor(private _bookService: BooksService, private _router:Router) {
  }

  ngOnInit(): void {
    this.getListas();
  }

  getListas(){
    this._bookService.getListas().subscribe(data => {
      this.results = data.results;
      for (const res of this.results) {
        this.lista = new Lista();
        this.lista.list_name = res.list_name;
        this.lista.list_name_encoded = res.list_name_encoded;
        this.lista.newest_published_date = res.newest_published_date;
        this.lista.updated = res.updated;
        this.listas.push(this.lista);
      }
    });
  }

  verLista( list:any ){
    this._router.navigate(['/list/',list]);
  }
}
