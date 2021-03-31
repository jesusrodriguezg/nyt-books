import { BooksService } from './../services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public title: string = "Your book wishlist";
  public wishList:Array<any> = [];

  constructor(private _booksService:BooksService) { }

  ngOnInit(): void {
    this.wishList = this._booksService.getWishList();
    console.log(this.wishList);
  }

  deleteWish(index: number){
    this._booksService.deleteWish(index);
  }

}
