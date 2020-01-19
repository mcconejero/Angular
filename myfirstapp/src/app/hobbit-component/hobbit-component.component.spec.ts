import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbitComponentComponent } from './hobbit-component.component';

describe('HobbitComponentComponent', () => {
  let component: HobbitComponentComponent;
  let fixture: ComponentFixture<HobbitComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbitComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
