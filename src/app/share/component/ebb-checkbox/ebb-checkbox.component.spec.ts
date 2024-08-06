import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbbCheckboxComponent } from './ebb-checkbox.component';

describe('EbbCheckboxComponent', () => {
  let component: EbbCheckboxComponent;
  let fixture: ComponentFixture<EbbCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EbbCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbbCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
