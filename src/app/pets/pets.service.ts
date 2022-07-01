import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Pet from './pet';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private httpClient: HttpClient) { }

  getAvailablePets(): Observable<Array<Pet>> {
    const params = new HttpParams().set('status', 'available');
    return this.httpClient.get<Array<Pet>>('pet/findByStatus', { params });
  }

  addPet(pet: Pet): Observable<any> {
    return this.httpClient.post<any>('pet', pet);
  }
}
