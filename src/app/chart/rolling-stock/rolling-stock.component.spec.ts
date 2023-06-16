import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingStockComponent } from './rolling-stock.component';

describe('RollingStockComponent', () => {
  let component: RollingStockComponent;
  let fixture: ComponentFixture<RollingStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollingStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollingStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
