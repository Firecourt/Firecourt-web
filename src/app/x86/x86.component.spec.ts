import { ComponentFixture, TestBed } from '@angular/core/testing';

import { X86Component } from './x86.component';

describe('X86Component', () => {
  let component: X86Component;
  let fixture: ComponentFixture<X86Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [X86Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(X86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
