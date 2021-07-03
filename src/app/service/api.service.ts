import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IBookInfo } from '../models/models';
import { url } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  search(
    query: string,
    pageNum: number
  ) {
    const params: string = [
      `${query}`,
      `${pageNum}`
    ].join('/');

    const queryUrl = `${url}${params}`;

    return this._http.get(queryUrl)
    // .pipe(
    //   map((response) => {
    //     return response.pipe(map((item: IBookInfo) => {
    //       const urlArr = [];
    //       const bookObj = {
    //         image: item.image,
    //         isbn13: item.isbn13,
    //         price: item.price,
    //         subtitle: item.subtitle,
    //         title: item.title,
    //         url: item.url,
    //       };
    //       urlArr.push(bookObj);
    //       return urlArr;
    //     }));
    //   })
    // );
  }
}