import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingDebtComponent } from './remaining-debt.component';

describe('RemainingDebtComponent', () => {
  let component: RemainingDebtComponent;
  let fixture: ComponentFixture<RemainingDebtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemainingDebtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemainingDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
