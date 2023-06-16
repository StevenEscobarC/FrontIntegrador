import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasContabilidadComponent } from './cuentas-contabilidad.component';

describe('CuentasContabilidadComponent', () => {
  let component: CuentasContabilidadComponent;
  let fixture: ComponentFixture<CuentasContabilidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentasContabilidadComponent]
    });
    fixture = TestBed.createComponent(CuentasContabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
