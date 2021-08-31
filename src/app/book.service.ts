import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book  } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // API Url
  bookUrl="/api/books";

  constructor( private http : HttpClient) { }

  // This method is used for method 1 and method 2 for observable
  // getBookFromStore():Observable<Book[]>{
  //   return this.http.get<Book[]>(this.bookUrl);
  // }


  // This method is used for method 3 for observable
  getBookFromStore(id:number):Observable<Book>{
    return this.http.get<Book>(this.bookUrl + '/' + id) ;
  }



}
