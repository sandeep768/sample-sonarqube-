import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusrendererComponent } from './statusrenderer.component';

describe('StatusrendererComponent', () => {
  let component: StatusrendererComponent;
  let fixture: ComponentFixture<StatusrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
