import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PremiumService {
  private apiUrl = 'http://localhost:4200/'
  constructor(private http: HttpClient) {

  }

  getOccupations() {
    return this.http.get(this.apiUrl + 'assets/occupations.json')
      .pipe(
        map((data: any) => {
          return data;
        }));
  }

  getRatingFactors(){
    return this.http.get(this.apiUrl + 'assets/ratings.json')
      .pipe(
        map((data: any) => {
          return data;
        }));
  }
}
