import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/backend/cruds/crud.service';

@Component({
  selector: 'app-cierre-presupuestal',
  templateUrl: './cierre-presupuestal.component.html',
  styleUrls: ['./cierre-presupuestal.component.css'],
})
export class CierrePresupuestalComponent implements OnInit {
  public data: any[] = [];

  constructor(private crud: CrudService) {}
  public listarSaldos() {
    this.crud.getAll('listarSaldos').subscribe((data: any[]) => {
      console.log(data);
      this.data = data;
    });
  }
  ngOnInit(): void {
    this.listarSaldos();
  }
}
