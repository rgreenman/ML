import {Component} from '@angular/core';
import {AppService} from '../service/app.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TrainingDto} from "../trainingDto";

@Component({
  selector: 'app-create-project',
  templateUrl: './app.create-project.component.html',
  styleUrls: ['./app.create-project.component.scss']
})

export class AppCreateProjectComponent {

  projectName: String = '';

  project: TrainingDto;

  constructor(
    private appService: AppService,
    public activeModal: NgbActiveModal) {}

  submit(projectName): void {

    this.project = {
      id: null,
      name: projectName,
      created_date: null,
      trained: false
    };

    this.appService.createProject(this.project).subscribe((res: TrainingDto) => {
      this.activeModal.close(res);
    });
  }
}
