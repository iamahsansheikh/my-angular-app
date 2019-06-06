import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPersonComponent } from './common-person.component';

describe('CommonPersonComponent', () => {
  let component: CommonPersonComponent;
  let fixture: ComponentFixture<CommonPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
