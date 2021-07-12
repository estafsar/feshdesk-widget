export abstract class FreshdeskWidgetModel {
  abstract widgetId: number;
  abstract locale: string;
  abstract callback(FreshworksWidget: any): any;
}
