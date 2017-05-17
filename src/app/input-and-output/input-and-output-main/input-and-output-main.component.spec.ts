import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAndOutputMainComponent } from './input-and-output-main.component';

describe('InputAndOutputMainComponent', () => {
  let component: InputAndOutputMainComponent;
  let fixture: ComponentFixture<InputAndOutputMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAndOutputMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAndOutputMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
