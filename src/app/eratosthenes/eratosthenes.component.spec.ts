import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EratosthenesComponent } from './eratosthenes.component';

describe('EratosthenesComponent', () => {
  let component: EratosthenesComponent;
  let fixture: ComponentFixture<EratosthenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EratosthenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EratosthenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
