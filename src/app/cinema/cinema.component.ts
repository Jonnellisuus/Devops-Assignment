import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {News} from './news';
import {CinemaService} from './cinema.service';

@Component({
  selector: 'app-finnkino',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  searchText: string | undefined;
  getNews$: Observable<News[]> | undefined;

  constructor(private movieService: CinemaService) {
  }

  ngOnInit() {
    this.getNews$ = this.movieService.getData();
  }
}
