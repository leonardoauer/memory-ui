import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Memory } from '../app.model/memory';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class MemoryService {

  memoriesUrl = 'http://localhost:8080/memories';

  constructor(
    private http: HttpClient
  ) { }

  getMemories(): Observable<Memory[]> {
    return this.http.get<Memory[]>(this.memoriesUrl)
      .pipe(
        tap(() => console.log('fetched memories')),
        catchError(this.handleError('getMemories()', []))
      );
  }

  getMemory(id: string): Observable<Memory> {
    return this.http.get<Memory>(`${this.memoriesUrl}/${id}`)
      .pipe(
        tap(_ => console.log(`fetched memory id=${id}`)),
        catchError(this.handleError<Memory>(`getMemory id=${id}`))
      );
  }

  updateMemory(memory: Memory): Observable<any> {
    return this.http.put(this.memoriesUrl, memory, httpOptions).pipe(
      tap(_ => console.log(`updated memory id=${memory.id}`)),
      catchError(this.handleError<any>('updateMemory'))
    );
  }

  addMemory(memory: Memory): Observable<any> {
    return this.http.post(this.memoriesUrl, memory, httpOptions).pipe(
      tap(_ => console.log(`adding new memory`)),
      catchError(this.handleError<any>('addMemory'))
    );
  }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
