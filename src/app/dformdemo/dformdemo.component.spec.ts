import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DformdemoComponent } from './dformdemo.component';

describe('DformdemoComponent', () => {
  let component: DformdemoComponent;
  let fixture: ComponentFixture<DformdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DformdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DformdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
