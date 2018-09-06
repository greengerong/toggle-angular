import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FeaturesFetcher } from 'toggle-angular';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MyFeaturesFetcher implements FeaturesFetcher {

  features = {
    dev: {
      foo: true,
      bar: false
    },
    prod: {
      foo: false,
      bar: true
    }
  };

  constructor(private router: Router) {

  }


  getFeatures(): { [key: string]: any } | Observable<{ [key: string]: any }> {
    const env = this.router.url.indexOf('prod') !== -1 ? 'prod' : 'dev';
    return this.features[env];
  }


}
