import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HulkDetailComponent } from './hulk-detail.component';

describe('HulkDetailComponent', () => {
  let component: HulkDetailComponent;
  let fixture: ComponentFixture<HulkDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HulkDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HulkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
