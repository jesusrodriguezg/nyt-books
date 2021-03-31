import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public urlListas: string = 'https://api.nytimes.com/svc/books/v3/lists/names.json?';
  public urlLista: string = 'https://api.nytimes.com/svc/books/v3/lists.json?list=';
  public urlAutores: string = 'https://api.nytimes.com/svc/books/v3/reviews.json?author=';
  public key: string = 'api-key=SfS8rXjniBjhRLYrrAT5T5uAxTyB4FWO';
  public wishList: Array<any> = [];

  constructor(private http: HttpClient) {
    this.urlListas = this.urlListas + this.key;
   }

  getListas():Observable<any>{
    return this.http.get(this.urlListas);
  }

  getLista(list: string):Observable<any>{
    return this.http.get(this.urlLista+list+'&'+this.key);
  }

  getAutor(autorBusca: string):Observable<any>{
    return this.http.get(this.urlAutores+autorBusca+'&'+this.key);
  }

  getWishList(){
    return this.wishList;
  }

  addWish(book:any){
    this.wishList.push(book);
  }

  deleteWish(index:number){
    this.wishList.splice(index,1);
  }
}
