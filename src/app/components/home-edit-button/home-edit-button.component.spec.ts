import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEditButtonComponent } from './home-edit-button.component';

describe('HomeEditButtonComponent', () => {
  let component: HomeEditButtonComponent;
  let fixture: ComponentFixture<HomeEditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEditButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
