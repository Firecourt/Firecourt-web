import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleSiliconComponent } from './apple-silicon.component';

describe('AppleSiliconComponent', () => {
  let component: AppleSiliconComponent;
  let fixture: ComponentFixture<AppleSiliconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleSiliconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleSiliconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
