import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  apiUrl: string;

  constructor() {
    this.apiUrl = environment.urlApi;
  }

  ngOnInit(): void {
    fetch(this.apiUrl + '/feed/list').then(value => {
      return value.json();
    }).then(json => {
      console.log(json);
    });
  }

}
