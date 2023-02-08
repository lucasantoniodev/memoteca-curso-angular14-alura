import { Pensamento } from './models/Thought';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }
}
