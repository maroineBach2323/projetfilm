import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronManDetailComponent } from './iron-man-detail.component';

describe('IronManDetailComponent', () => {
  let component: IronManDetailComponent;
  let fixture: ComponentFixture<IronManDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IronManDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IronManDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
