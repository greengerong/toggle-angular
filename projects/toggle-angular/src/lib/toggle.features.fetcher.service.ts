import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeaturesFetcher } from './toggle.model';
import { ToggleStrategyFactory } from './toggle-strategy-factory.service';


@Injectable({
  providedIn: 'root'
})
export class ToggleFeaturesFetcher implements FeaturesFetcher {

  getFeatures(): { [p: string]: any } | Observable<{ [p: string]: any }> {
    return undefined;
  }

}
