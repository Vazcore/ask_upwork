import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanghaComponent } from './sangha.component';

describe('SanghaComponent', () => {
  let component: SanghaComponent;
  let fixture: ComponentFixture<SanghaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanghaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanghaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
