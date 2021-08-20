import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  constructor(private http: HttpClient) {}

  getUsers$ = () => {
    return this.http.get(
      environment.API_URL + '?results=10&inc=login,picture,name'
    );
  };

  getUser$ = () => {
    return this.http.get(
      environment.API_URL + '?seed=user&inc=login,picture,name'
    );
  };

  getPictures$ = () => {
    return this.http.get('https://picsum.photos/v2/list?page=1');
  };

  parse_link_header = (header) => {
    if (header.length == 0) {
      return;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach((p) => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    });
    return links;
  };
}
