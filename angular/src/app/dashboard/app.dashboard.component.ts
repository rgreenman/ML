import {Component, OnInit} from "@angular/core";
import {TrainingDto} from "../trainingDto";
import {AppCreateProjectComponent} from "../create-project/app.create-project.component";
import {AppDeleteProjectComponent} from "../delete-project/app.delete-project.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AppService} from "../service/app.service";

@Component ({
  selector: 'app-dashboard-component',
  templateUrl: './app.dashboard.component.html',
  styleUrls: ['./app.dashboard.component.scss', '../scss/global.scss']
})

export class AppDashboardComponent implements OnInit {

  projects: TrainingDto[];

  constructor(private modalService: NgbModal,
  private appService: AppService) {}

  createProject() {
    const modalRef = this.modalService.open(AppCreateProjectComponent);

    modalRef.result.then((result) => {
        this.projects.push(result);
    }, () => {
    })
  }

  deleteProject(project) {
    const modalRef = this.modalService.open(AppDeleteProjectComponent);
    modalRef.componentInstance.project = project;

    modalRef.result.then((result) => {
      this.projects = this.projects.filter(project => project.id !== result);
      }, () => {
    })
  }

  ngOnInit(): void {
    this.appService.fetchProjects().subscribe(response => {
      this.projects = response;
    });
  }
}
