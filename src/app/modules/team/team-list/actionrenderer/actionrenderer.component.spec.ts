import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionrendererComponent } from './actionrenderer.component';

describe('ActionrendererComponent', () => {
  let component: ActionrendererComponent;
  let fixture: ComponentFixture<ActionrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
