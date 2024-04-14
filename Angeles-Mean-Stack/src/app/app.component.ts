import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'booksapp';
  readonly APIUrl = "http://localhost:5038/api/books/";

  constructor(private http: HttpClient) {}

  books: any = [];

  refreshBooks() {
    this.http.get<any[]>(this.APIUrl + 'GetBooks').subscribe((data: any[]) => { // Adjust the type here
      this.books = data;
    });
  }

  ngOnInit() {
    this.refreshBooks();
  }

  addBook() {
    const newBook = (<HTMLInputElement>document.getElementById("newBook")).value;
    const newDesc = (<HTMLInputElement>document.getElementById("newDesc")).value;
    const newPrice = (<HTMLInputElement>document.getElementById("newPrice")).value;
    const formData = new FormData();
    formData.append("title", newBook);
    formData.append("description", newDesc);
    formData.append("price", newPrice.toString());

    this.http.post(this.APIUrl + 'AddBook', formData).subscribe(data => {
      alert(data);
      this.refreshBooks();
    });
  }

  deleteBook(id: any) {
    this.http.delete(this.APIUrl + 'DeleteBook?id=' + id).subscribe(data => {
      alert(data);
      this.refreshBooks();
    });
  }
}