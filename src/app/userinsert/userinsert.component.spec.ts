import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinsertComponent } from './userinsert.component';

describe('UserinsertComponent', () => {
  let component: UserinsertComponent;
  let fixture: ComponentFixture<UserinsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
