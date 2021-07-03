import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBookInfo } from '../models/models';
import { ApiService } from '../service/api.service';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  query: string = '';
  books: Array<any> = [];
  response: any = [];
  response1: any = [];
  pageNum: number = 1;
  constructor(
    private _localStorageService: LocalStorageService,
    private _api: ApiService
  ) {}
// search обращается к api и с помощью нее выполняется поиск 
  search(event: any) {
    let val = event.target.value;
    if (this.query !== val) {
      this.pageNum = 1;
      this.query = val;

      this._api.search(this.query, this.pageNum).subscribe((res) => {
        this.response = res;
        this.books = this.response.books;
        console.log(this.books);
      });
    }
  }
  // addBooks увеличивает количество книг отображаемых на странице на 10 
  addBooks() {
    this.pageNum += this.pageNum;
    this._api.search(this.query, this.pageNum).subscribe((res) => {
      this.response1 = res;
      this.books = this.books.concat(this.response1.books);
      console.log(this.books);
    });
  }
  // bookmark сохраняет книги в закладках(локальное хранилище)
  bookmark(result: IBookInfo) {
    let bookmarkArr = this._localStorageService.get();
    bookmarkArr.push(result);
    bookmarkArr = bookmarkArr.filter(
      (thing: any, index: any, self: any) =>
        index ===
        self.findIndex(
          (t: IBookInfo) => t.url === thing.url && t.title === thing.title
        )
    );
    this._localStorageService.set(bookmarkArr);
  }
}
