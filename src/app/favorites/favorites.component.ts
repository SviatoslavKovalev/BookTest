import { Component, OnInit } from '@angular/core';
import { IBookInfo } from '../models/models';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  books = this._localStorageService.get();
  constructor(private _localStorageService: LocalStorageService) {}

  ngOnInit(): void {}
// функция remote убирает книгу из favorites
  remote(key: IBookInfo) {
    this.books = this.books.filter((t: IBookInfo) => t !== key);
    this._localStorageService.set(this.books);
  }
}