import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { firstValueFrom, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsyncService {
  constructor(private httpClient: HttpClient) {}

  getName(): Promise<string> {
    return firstValueFrom(this.getNameFromServer());
  }

  private getNameFromServer(): Observable<string> {
    return this.httpClient
      .get<{ name: string }>('http://127.0.0.1:8080/names')
      .pipe(map((body) => body.name));
  }
}
