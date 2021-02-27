import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexGraphMultipleComponent } from './apex-graph-multiple.component';

describe('ApexGraphMultipleComponent', () => {
  let component: ApexGraphMultipleComponent;
  let fixture: ComponentFixture<ApexGraphMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexGraphMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexGraphMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
