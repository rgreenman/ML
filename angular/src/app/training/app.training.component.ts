import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../service/app.service";

@Component({
  selector: 'app-training',
  templateUrl: './app.training.component.html',
  styleUrls: ['./app.training.component.scss']
})

export class AppTrainingComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private appService: AppService) {
  }

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('projectId');
    //this.appService.get
  }
}

