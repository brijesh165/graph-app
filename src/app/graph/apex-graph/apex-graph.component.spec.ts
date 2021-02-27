import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexGraphComponent } from './apex-graph.component';

describe('ApexGraphComponent', () => {
  let component: ApexGraphComponent;
  let fixture: ComponentFixture<ApexGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
