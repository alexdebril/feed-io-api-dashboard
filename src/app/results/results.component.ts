import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { ResultsApi } from '../ResultsApi';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  apiUrl: string;
  constructor(private route: ActivatedRoute) {
    this.apiUrl = environment.urlApi;
  }

  ngOnInit(): void {
    this.getResults();
  }

  getResults(): void {
    const api = new ResultsApi(this.apiUrl);
    const slug = this.route.snapshot.paramMap.get('slug');
    console.log(slug);
    if (typeof slug === 'string') {
      const results = api.list(slug);
      console.log(results);
    }
  }
}
