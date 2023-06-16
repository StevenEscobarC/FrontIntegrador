import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasPresupuestoComponent } from './cuentas-presupuesto.component';

describe('CuentasPresupuestoComponent', () => {
  let component: CuentasPresupuestoComponent;
  let fixture: ComponentFixture<CuentasPresupuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentasPresupuestoComponent]
    });
    fixture = TestBed.createComponent(CuentasPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
