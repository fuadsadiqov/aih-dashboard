import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueBreakdownComponent } from './revenue-breakdown.component';

describe('RevenueBreakdownComponent', () => {
  let component: RevenueBreakdownComponent;
  let fixture: ComponentFixture<RevenueBreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueBreakdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
