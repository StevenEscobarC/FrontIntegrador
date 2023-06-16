import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasCuentasComponent } from './reservas-cuentas.component';

describe('ReservasCuentasComponent', () => {
  let component: ReservasCuentasComponent;
  let fixture: ComponentFixture<ReservasCuentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservasCuentasComponent]
    });
    fixture = TestBed.createComponent(ReservasCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
