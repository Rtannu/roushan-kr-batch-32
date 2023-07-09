import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Submission } from '../models/submission';

@Injectable({
  providedIn: 'root'
})
export class SubmissionRestApiService {
  apiURL = 'http://localhost:8080/submission';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  public getAllSubmission():Observable<Submission[]>{
    return this.http.get<Submission[]>(this.apiURL);
  }

  public deleteSubmissionBySerialNumber(serialNumber:string):Observable<string>{
    return this.http.delete<string>(this.apiURL+`/${serialNumber}`);
  }

  public updateSubmissionBySerialNumber(serialNumber:any,requestSubmissionData:any):Observable<Submission>{
    return this.http.patch<Submission>(
      this.apiURL+`/${serialNumber}`,
      JSON.stringify(requestSubmissionData),
      this.httpOptions);
  }

  public createSubmission(createSubmissionData:any):Observable<Submission>{
    return this.http.post<Submission>(
      this.apiURL,
      JSON.stringify(createSubmissionData),
      this.httpOptions);
  }

}
