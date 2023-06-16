import { Component } from '@angular/core';
import { CrudService } from 'src/app/backend/cruds/crud.service';

@Component({
  selector: 'app-cuentas-contabilidad',
  templateUrl: './cuentas-contabilidad.component.html',
  styleUrls: ['./cuentas-contabilidad.component.css']
})
export class CuentasContabilidadComponent {
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
