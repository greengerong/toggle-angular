import { Inject, Injectable, Optional } from '@angular/core';
import { ToggleStrategy } from './toggle.model';


@Injectable({
  providedIn: 'root'
})
export class ToggleStrategyFactory {
  static STRATEGY_SEPARATOR = '=';

  constructor(@Optional() @Inject(ToggleStrategy) private strategies: ToggleStrategy[]) {

  }

  isActive(feature: string, featureValue: any): boolean {
    if (this.isUseStrategy(featureValue)) {
      const ps = featureValue.toString().split(ToggleStrategyFactory.STRATEGY_SEPARATOR);
      const strategy = this.strategies.find(it => it.keyword() === ps[0].trim());
      return strategy ? strategy.isActive(feature, ps[1].trim()) : false;
    }

    return featureValue.toString().toLowerCase() === 'true';
  }

  private isUseStrategy(featureValue: any) {
    return featureValue.toLowerCase && (featureValue as string).indexOf(ToggleStrategyFactory.STRATEGY_SEPARATOR) != -1;
  }
}
