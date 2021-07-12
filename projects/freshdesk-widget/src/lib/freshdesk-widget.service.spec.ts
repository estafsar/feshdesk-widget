import { TestBed } from '@angular/core/testing';
import { FreshdeskWidgetService } from './freshdesk-widget.service';


describe('FreshdeskWidgetService', () => {
  let service: FreshdeskWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreshdeskWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
