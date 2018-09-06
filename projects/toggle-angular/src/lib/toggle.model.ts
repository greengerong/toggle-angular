import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';

export const FETCHER = new InjectionToken('featuresFetcher');

export abstract class FeaturesFetcher {
  abstract getFeatures(): { [key: string]: any } | Observable<{ [key: string]: any }>;
}


export abstract class ToggleStrategy {

  abstract keyword(): string;

  abstract isActive(feature: string, featureValue: string): boolean;
}
