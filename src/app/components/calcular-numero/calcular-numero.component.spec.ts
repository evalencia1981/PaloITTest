import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularNumeroComponent } from './calcular-numero.component';

describe('CalcularNumeroComponent', () => {
  let component: CalcularNumeroComponent;
  let fixture: ComponentFixture<CalcularNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularNumeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
