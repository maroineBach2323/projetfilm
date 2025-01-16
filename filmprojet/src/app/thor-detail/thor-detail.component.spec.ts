import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThorDetailComponent } from './thor-detail.component';

describe('ThorDetailComponent', () => {
  let component: ThorDetailComponent;
  let fixture: ComponentFixture<ThorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThorDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
