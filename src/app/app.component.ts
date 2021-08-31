import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudOperationService } from './crud-operation.service';
import { Book } from './book';
import { BookService } from './book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  // title = 'myapp';

  filterTerm!: string; // Add a ng2-search Filter

  // dataFetch: any = [];

  // constructor(private user: CrudOperationService) {
  //   this.user.getData().subscribe(data => {
  //     console.log(data);
  //     this.dataFetch = data;
  //   })
  // }


  title="Observable Tutorials ";
 

  constructor( private bookservice:BookService) { }


  //Method 1 - Observable & Subscribe 

  // softBooks!: Book[];
  // getSoftBooks(){
  //   this.bookservice.getBookFromStore().subscribe((books: any[])=>this.softBooks=books);
  // }
  // ngOnInit(): void {
  //   this.getSoftBooks();
  // }

 
 
  //Method 2 -  Observable and Async and Pipes 
  softBooks!: Observable<Book[]>;
  getSoftBook(){
    this.softBooks = this.bookservice.getBookFromStore();
  }

   ngOnInit(): void {
    this.getSoftBook();
  }




  






}
