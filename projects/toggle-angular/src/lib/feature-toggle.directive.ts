import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ToggleService } from './toggle.service';

@Directive({
  selector: '[featureToggle]'
})
export class FeatureToggleDirective {

  constructor(private _viewContainer: ViewContainerRef,
              private _templateRef: TemplateRef<any>,
              private  toggleService: ToggleService) {
  }

  @Input('featureToggle')
  set toggle(feature: string) {
    this.toggleService.toggle(feature, () => {
      this._viewContainer.createEmbeddedView(this._templateRef);
    }, () => {
      this._viewContainer.clear();
    });
  }
}
