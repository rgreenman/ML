import {Component, Input} from '@angular/core';
import {AppService} from '../service/app.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TrainingDto} from "../trainingDto";

@Component({
  selector: 'app-delete-project',
  templateUrl: './app.delete-project.component.html',
  styleUrls: ['./app.delete-project.component.scss']
})

export class AppDeleteProjectComponent {

  @Input() project: TrainingDto;

  constructor(
    private appService: AppService,
    public activeModal: NgbActiveModal) {}

  submit(projectId: number): void {
    this.appService.deleteProject(projectId).subscribe((res: number) => {
      this.activeModal.close(res);
    });
  }
}
