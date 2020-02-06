import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TrainingDto} from "../trainingDto";
import {interval, Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {CoinValueDto} from "../coin-value-chart/CoinValueDto";

@Injectable({
  providedIn: 'root',
})

export class AppService {

  constructor(private http: HttpClient) {
  }

  //Fetch all projects
  fetchProjects(): Observable<TrainingDto[]> {
    return this.http.get<TrainingDto[]>('/projects');
  }

  //Create a new project and return the created project
  createProject(project: TrainingDto): Observable<TrainingDto> {
    return this.http.post<TrainingDto>('/project', project);
  }

  //Delete a project by id and return the id of the deleted project
  deleteProject(project_id: number): Observable<number> {
    return this.http.delete<number>(`/project/${project_id}`)
  }

  //Fetch the coin chart data
  fetchCoinChart(coins: string[], limit: number): Observable<CoinValueDto[]> {
    return this.http.get<CoinValueDto[]>(`/coinValueChart/${coins}/${limit}`, {})
  }

  //Run a loop to fetch the data for the graph on a looped call to update it
  updateCoinChart(coins: string[], limit: number): Observable<CoinValueDto[]> {
    return interval(300000).pipe(switchMap(() => {
        return this.fetchCoinChart(coins, limit)
    }))
  }
}
