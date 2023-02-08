import { Pensamento } from './models/Thought';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ToughtService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private readonly http: HttpClient) {}

  criar(pensamento: Pensamento) {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  listar() {
    return this.http.get<Pensamento[]>(this.API);
  }
}
