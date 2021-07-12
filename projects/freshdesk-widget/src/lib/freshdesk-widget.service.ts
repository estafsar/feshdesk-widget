import { Injectable } from '@angular/core';
import { FreshdeskWidgetModel } from './freshdesk-widget.model';

function getWindow(): any {
  return window;
}

@Injectable()
export class FreshdeskWidgetService {
  constructor(private ngxFreshdeskWidgetWebwidgetConfig?: FreshdeskWidgetModel) {
    if (!this.ngxFreshdeskWidgetWebwidgetConfig.widgetId) {
      throw new Error(
        'Missing widgetId. Please set in app config via FreshdeskWidgetWidgetProvider'
      );
    }
    const window = getWindow();

    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://widget.freshworks.com/widgets/${this.ngxFreshdeskWidgetWebwidgetConfig.widgetId}.js`;

    window.fwSettings = {
      widget_id: ngxFreshdeskWidgetWebwidgetConfig.widgetId,
      locale: ngxFreshdeskWidgetWebwidgetConfig.locale,
    };

    window.FreshworksWidget ||
      (function () {
        if ('function' != typeof window.FreshworksWidget) {
          let n = function () {
            n['q'].push(arguments);
          };
          (n['q'] = []), (window.FreshworksWidget = n);
        }
      })();

    script.onload = function (event) {
      try {
        ngxFreshdeskWidgetWebwidgetConfig.callback(window.FreshworksWidget);
      } catch (error) {
        console.log('error.: ', error);
      }
    };

    script.onerror = function (event) {
      console.log('error Onerror.: ', event);
    };

    document.body.append(script);
  }

  get FreshworksWidget() {
    const window = getWindow();
    return window.FreshworksWidget;
  }
}
