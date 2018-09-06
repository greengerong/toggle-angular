import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeaturesFetcher, FETCHER } from './toggle.model';
import { ToggleStrategyFactory } from './toggle-strategy-factory.service';


@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  isEnableOnEmpty = false;

  constructor(private featuresFetcher: FeaturesFetcher, private toggleStrategyFactory: ToggleStrategyFactory) {
  }

  isActive(feature: string): Observable<boolean> {
    const result = this.featuresFetcher.getFeatures();
    const observable = result instanceof Observable ? result : of(result);
    return observable.pipe(
      map(features => features[feature]),
      map(value => value ? this.toggleStrategyFactory.isActive(feature, value) : this.isEnableOnEmpty)
    );
  }

  toggle<T>(feature: string, enable: () => T, disable: () => T = () => null): Observable<T> {
    return this.isActive(feature)
      .pipe(
        map(active => active ? enable : disable),
        map(func => func())
      );
  }

}
