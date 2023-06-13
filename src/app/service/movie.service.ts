import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResult } from '../interface/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: string = "https://api.themoviedb.org/3/";
    apiKey: string = "5d80a75b4907a916e9bc21e6101ae713";
    auth_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDgwYTc1YjQ5MDdhOTE2ZTliYzIxZTYxMDFhZTcxMyIsInN1YiI6IjY0ODg0MzczZTI3MjYwMDBlOGMyNzFmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CNbpsrlyGojMV7Br1sdpXTtpvB0BkRUO2eJawrANxL8';
    
  constructor(private http: HttpClient ) { 
    
  }
  public getMovieList():Observable<MovieResult>{
    return this.http.get<MovieResult>(`${this.baseUrl}trending/movie/day?api_key=${this.apiKey}`);
  }
  public getMovieDetails(movieId:number):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    });
    return this.http.get<MovieResult>(`${this.baseUrl}movie/${movieId}`,{headers:headers} );
  }
}

