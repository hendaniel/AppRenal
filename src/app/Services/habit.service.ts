import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Habito } from '../models/resultado';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor(private http: HttpClient) { 
  }

  getHabit(){
    return this.http.get<Habito>(environment.urlHabitos).pipe(delay(1000));
  }
}
