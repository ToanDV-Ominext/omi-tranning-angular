import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbbInputComponent } from './ebb-input.component';

describe('EbbInputComponent', () => {
  let component: EbbInputComponent;
  let fixture: ComponentFixture<EbbInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EbbInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbbInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
