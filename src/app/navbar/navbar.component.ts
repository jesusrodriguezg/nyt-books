import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  public author: string = "";
  public isCollapse = true;   // guardamos el valor

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toggleState() { // manejador del evento
      let foo = this.isCollapse;
      this.isCollapse = foo === false ? true : false;
  }

  searchAuthor(author:string){
    this.router.navigate(['/authors/',author]);
  }

}
