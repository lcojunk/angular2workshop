import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseInTheBoxMainComponent } from './mouse-in-the-box-main.component';

describe('MouseInTheBoxMainComponent', () => {
  let component: MouseInTheBoxMainComponent;
  let fixture: ComponentFixture<MouseInTheBoxMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseInTheBoxMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseInTheBoxMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
