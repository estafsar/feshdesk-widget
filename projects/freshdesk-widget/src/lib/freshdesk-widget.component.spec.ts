import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FreshdeskWidgetComponent } from './freshdesk-widget.component';


describe('FreshdeskWidgetComponent', () => {
  let component: FreshdeskWidgetComponent;
  let fixture: ComponentFixture<FreshdeskWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshdeskWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshdeskWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
