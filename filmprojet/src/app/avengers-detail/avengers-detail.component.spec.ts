import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengersDetailComponent } from './avengers-detail.component';

describe('AvengersDetailComponent', () => {
  let component: AvengersDetailComponent;
  let fixture: ComponentFixture<AvengersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvengersDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvengersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
