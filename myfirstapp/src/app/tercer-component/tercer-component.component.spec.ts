import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerComponentComponent } from './tercer-component.component';

describe('TercerComponentComponent', () => {
  let component: TercerComponentComponent;
  let fixture: ComponentFixture<TercerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TercerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
