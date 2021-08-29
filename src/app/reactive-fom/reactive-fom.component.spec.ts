import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFomComponent } from './reactive-fom.component';

describe('ReactiveFomComponent', () => {
  let component: ReactiveFomComponent;
  let fixture: ComponentFixture<ReactiveFomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
