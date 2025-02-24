import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProjectsComponent } from './projects/projects.component';
import { MoreProjectsComponent } from './more-projects/more-projects.component';
import { ContactComponent } from './contact/contact.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    BannerComponent,
    AboutComponent,
    JobsComponent,
    ProjectsComponent,
    MoreProjectsComponent,
    ContactComponent
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private analyticsService: AnalyticsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
   // this.analyticsService.sendAnalyticPageView("/", "")
    this.route.params.subscribe(params => {
      const language = params['language'];
      // Burada dil değişikliği işlemlerini yapabilirsiniz
    });
  }


}
