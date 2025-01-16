import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderManDetailComponent } from './spider-man-detail.component';

describe('SpiderManDetailComponent', () => {
  let component: SpiderManDetailComponent;
  let fixture: ComponentFixture<SpiderManDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpiderManDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiderManDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
