import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmadionDialogComponent } from './confirmadion-dialog.component';

describe('ConfirmadionDialogComponent', () => {
  let component: ConfirmadionDialogComponent;
  let fixture: ComponentFixture<ConfirmadionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmadionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmadionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
