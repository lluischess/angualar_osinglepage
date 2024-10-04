import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CoutriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';

  constructor(private httpClient: HttpClient) { }

  /**
   * Search countries by capital
   * @param term The capital of the country to search
   * @returns An array of countries with the capital matching the search term
   */
  searchCapital(term: string): Observable<Country[]> {
    /**
     * The API endpoint to search countries by capital
     * @example https://restcountries.com/v3.1/capital/Tokyo
     */
    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${term}`);
  }
}
