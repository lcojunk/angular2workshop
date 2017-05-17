import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideNShowMainComponent } from './hide-n-show-main.component';

describe('HideNShowMainComponent', () => {
  let component: HideNShowMainComponent;
  let fixture: ComponentFixture<HideNShowMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideNShowMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideNShowMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
