import { Component } from '@angular/core';
import { CrudService } from 'src/app/backend/cruds/crud.service';

@Component({
  selector: 'app-reservas-cuentas',
  templateUrl: './reservas-cuentas.component.html',
  styleUrls: ['./reservas-cuentas.component.css']
})
export class ReservasCuentasComponent {
  public data: any[] = [];

  constructor(private crud: CrudService) {}
  public listarSaldos() {
    this.crud.getAll('listarReservas').subscribe((data: any[]) => {
      console.log(data);
      this.data = data;
    });
  }
  ngOnInit(): void {
    this.listarSaldos();
  }
}
