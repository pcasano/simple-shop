import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeWithModels } from './TypeWithModels';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  responseData: any;

  fetchData(): Observable<any> {
    return this.http.get<any>('../assets/items.json');
  }

  getItemGivenTypeAndModel(givenType: string, givenModel: string): any {
    return this.responseData.find((item: TypeWithModels) => item.type === givenType)?.models
    .find((model: Model) => model.model === givenModel);
  }

}