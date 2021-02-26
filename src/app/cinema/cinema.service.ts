import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {News} from './news';
import {parseString} from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://www.finnkino.fi/xml/News/';
  }

  getData(): Observable<any> {
    return this.httpClient.get(this.url, {responseType: 'text'}).pipe(map(response => {
      let newsData: News [] = [];
      parseString(response, {
        trim: true,
        explicitArray: false,
        mergeAttrs: true
        // tslint:disable-next-line:only-arrow-functions
      }, function( err: any, result: { News: { NewsArticle: News[]; }; }) {
        newsData = result.News.NewsArticle;
      });
      return newsData;
    }));
  }
}
