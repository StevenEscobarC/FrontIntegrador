import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApropiacionComponent } from './apropiacion.component';

describe('ApropiacionComponent', () => {
  let component: ApropiacionComponent;
  let fixture: ComponentFixture<ApropiacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApropiacionComponent]
    });
    fixture = TestBed.createComponent(ApropiacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
