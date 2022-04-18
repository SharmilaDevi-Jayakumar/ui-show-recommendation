import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {RecommendedShow} from "./models/recommended-show";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  private baseUrl="https://springboot-shows.herokuapp.com/"

  constructor(private httpClient: HttpClient) { }

  public getRandomRecommendation(userId: string | undefined) {
    let queryParams = new HttpParams();
    // @ts-ignore
    queryParams = queryParams.append("userId",userId);
    return this.httpClient.get<RecommendedShow>(`${this.baseUrl+"showRecommendationByUserId"}`,{params:queryParams});
  }

  resetUserHistory(userId: string):Observable<void> {
    let queryParams = new HttpParams();
    // @ts-ignore
    queryParams = queryParams.append("userId",userId);
    return this.httpClient.delete<void>(`${this.baseUrl+"resetUserHistory"}`,{params:queryParams});
  }
}
