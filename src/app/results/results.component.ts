import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { ResultsApi } from '../ResultsApi';
import {Result} from '../Result';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  apiUrl: string;
  results: Result[] = [];

  constructor(private route: ActivatedRoute) {
    this.apiUrl = environment.urlApi;
  }

  ngOnInit(): void {
    this.getResults();
  }

  getResults(): void {
    const api = new ResultsApi(this.apiUrl);
    const slug = this.route.snapshot.paramMap.get('slug');
    if (typeof slug === 'string') {
      this.results = api.list(slug);
    }
  }
}
