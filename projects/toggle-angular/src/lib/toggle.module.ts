import { ModuleWithProviders, NgModule } from '@angular/core';
import { ToggleService } from './toggle.service';
import { ToggleStrategyFactory } from './toggle-strategy-factory.service';
import { FeatureToggleDirective } from './feature-toggle.directive';
import { FeaturesFetcher, FETCHER } from './toggle.model';
import { Type } from '@angular/core';

@NgModule({
  imports: [],
  declarations: [
    FeatureToggleDirective
  ],
  providers: [],
  exports: [
    FeatureToggleDirective
  ]
})
export class ToggleModule {

  static forRoot(options: { fetcher: Type<FeaturesFetcher> }): ModuleWithProviders {
    return {
      ngModule: ToggleModule,
      providers: [
        {
          provide: FeaturesFetcher, useClass: options.fetcher
        },
        ToggleStrategyFactory,
        ToggleService
      ]
    };

  }
}
