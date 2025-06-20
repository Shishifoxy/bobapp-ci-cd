import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Joke } from '../model/joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  private pathService = 'http://localhost:8080/api/joke';

  private subject: BehaviorSubject<Joke | null> = new BehaviorSubject<Joke | null>(null);

  constructor(private httpClient: HttpClient) {
    this.getRandomJoke();
  }

  public getRandomJoke(): void {
    this.httpClient.get<Joke>(this.pathService).subscribe({
      next: (joke: Joke) => this.subject.next(joke),
      error: (err) => {
        console.error('Erreur lors du chargement de la blague :', err);
        this.subject.next(null);
      }
    });
  }


  public joke$(): Observable<Joke | null > {
    return this.subject.asObservable();
  }
}
