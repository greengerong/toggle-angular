import { noop } from 'rxjs';

export function featureToggle(feature: string) {
  return function (target: any, propertyKey: string, descriptor: any) {
    const oldDescriptor = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const toggleService = (this as any).toggleService;
      if (!toggleService) {
        throw new Error('Should provide ToggleService in your constructor.');
      }

      toggleService.toggle(feature, function () {
        oldDescriptor.apply(this, args);
      })
        .subscribe(noop, console.error);
    };

    return descriptor;
  };
}
