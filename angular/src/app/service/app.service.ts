import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TrainingDto} from "../trainingDto";
import {Observable} from "rxjs";

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
}
