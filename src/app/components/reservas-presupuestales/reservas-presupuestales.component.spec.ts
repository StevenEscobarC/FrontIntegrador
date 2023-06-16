import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasPresupuestalesComponent } from './reservas-presupuestales.component';

describe('ReservasPresupuestalesComponent', () => {
  let component: ReservasPresupuestalesComponent;
  let fixture: ComponentFixture<ReservasPresupuestalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservasPresupuestalesComponent]
    });
    fixture = TestBed.createComponent(ReservasPresupuestalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
