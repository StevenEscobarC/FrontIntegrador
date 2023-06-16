import { Component } from '@angular/core';
import { CrudService } from 'src/app/backend/cruds/crud.service';

@Component({
  selector: 'app-cuentas-presupuesto',
  templateUrl: './cuentas-presupuesto.component.html',
  styleUrls: ['./cuentas-presupuesto.component.css']
})
export class CuentasPresupuestoComponent {
  public data: any[] = [];

  constructor(private crud: CrudService) {}
  public listarSaldos() {
    this.crud.getAll('listarCuentasPresupuesto').subscribe((data: any[]) => {
      console.log(data);
      this.data = data;
    });
  }
  ngOnInit(): void {
    this.listarSaldos();
  }
}
