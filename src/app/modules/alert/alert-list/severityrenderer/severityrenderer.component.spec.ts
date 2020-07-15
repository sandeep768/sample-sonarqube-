import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverityrendererComponent } from './severityrenderer.component';

describe('SeverityrendererComponent', () => {
  let component: SeverityrendererComponent;
  let fixture: ComponentFixture<SeverityrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeverityrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeverityrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
