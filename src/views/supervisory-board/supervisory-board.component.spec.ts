import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisoryBoardComponent } from './supervisory-board.component';

describe('SupervisoryBoardComponent', () => {
  let component: SupervisoryBoardComponent;
  let fixture: ComponentFixture<SupervisoryBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisoryBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisoryBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
