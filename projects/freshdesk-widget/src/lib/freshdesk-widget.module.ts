
import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { FreshdeskWidgetModel } from './freshdesk-widget.model';
import { FreshdeskWidgetService } from './freshdesk-widget.service';

@NgModule()
export class FreshdeskWidgetModule {
  static forRoot(
    FreshdeskWidgetConfig: Type<FreshdeskWidgetModel>
  ): ModuleWithProviders<FreshdeskWidgetModule> {
    return {
      ngModule: FreshdeskWidgetModule,
      providers: [
        { provide: FreshdeskWidgetModel, useClass: FreshdeskWidgetConfig },
        {
          provide: FreshdeskWidgetService,
          useClass: FreshdeskWidgetService,
          deps: [FreshdeskWidgetModel],
        },
      ],
    };
  }
}

export { FreshdeskWidgetService, FreshdeskWidgetModel };
