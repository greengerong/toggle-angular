import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MyFeaturesFetcher } from './MyFeaturesFetcher';
import { featureToggle } from '../../../projects/toggle-angular/src/lib/feature.toggle';
import { ToggleService } from '../../../projects/toggle-angular/src/lib/toggle.service';
import { noop } from 'rxjs';
import { FeaturesFetcher } from '../../../projects/toggle-angular/src/lib/toggle.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  env: string;
  features = {};

  constructor(private router: ActivatedRoute,
              private myFeaturesFetcher: FeaturesFetcher,
              private toggleService: ToggleService) {
  }


  ngOnInit() {
    this.router.params.subscribe(params => {
      this.env = params.env;
      this.features = this.myFeaturesFetcher.getFeatures();
    });
  }

  toggle() {
    this.toggleService.toggle('foo', () => alert('foo call by toggle'))
      .subscribe(noop, console.error);
  }

  @featureToggle('foo')
  alertFoo() {
    alert('foo call');
  }

  @featureToggle('bar')
  alertBar() {
    alert('bar call');
  }

}
