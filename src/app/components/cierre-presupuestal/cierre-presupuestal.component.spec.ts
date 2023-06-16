import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierrePresupuestalComponent } from './cierre-presupuestal.component';

describe('CierrePresupuestalComponent', () => {
  let component: CierrePresupuestalComponent;
  let fixture: ComponentFixture<CierrePresupuestalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CierrePresupuestalComponent]
    });
    fixture = TestBed.createComponent(CierrePresupuestalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
