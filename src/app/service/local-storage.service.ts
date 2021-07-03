import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private _localStorage: Storage;
  private _key: string = 'books';

  constructor() {
    this._localStorage = window.localStorage;
  }

  get() {
    let data = this._localStorage.getItem(this._key);
    return data ? JSON.parse(data) : [];
  }

  set(value: any) {
    this._localStorage.setItem(this._key, JSON.stringify(value));
  }

  remove() {
    this._localStorage.removeItem(this._key);
  }
}
