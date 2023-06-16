import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CrudService } from 'src/app/backend/cruds/crud.service';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.css'],
})
export class DisponibilidadComponent {
  solicitudCdp: boolean = true;
  solicitudReintegro: boolean = false;
  registros = [
    { identificacion: '001', nombre: 'Grupo Comunicaciones' },
    { identificacion: '002', nombre: 'Subdirección Administrativa' },
    { identificacion: '003', nombre: 'Dirección Financiera' },
    { identificacion: '004', nombre: 'Subdirección Administrativa' },
  ];

  gastos = [
    { identificacion: '001', nombre: 'Sueldo Básico', valor: '' },
    { identificacion: '002', nombre: 'Consultorías financieras', valor: '' },
  ];

  reintegro = [
    {
      dependencia: 'Grupo Comunicaciones',
      gastos: 'Sueldo Básico',
      valor: '500000',
      valorR: '',
    },
    {
      dependencia: 'Subdirección Administrativa',
      gastos: 'Consultorías financieras',
      valor: '30000',
      valorR: '',
    },
    {
      dependencia: 'Dirección Financiera',
      gastos: 'Sueldo Básico',
      valor: '60000',
      valorR: '',
    },
    {
      dependencia: 'Subdirección Administrativa',
      gastos: 'Consultorías financieras',
      valor: '600009',
      valorR: '',
    },
  ];

  elementosSeleccionados: any[] = [];
  elementosSeleccionados2: any[] = [];

  dialogAbierto = false; // Variable para controlar el estado del diálogo
  dialogAbierto2 = false; // Variable para controlar el estado del diálogo
  fechaSeleccionada: any;
  consecutivo: any;

  constructor(public dialog: MatDialog, public crud: CrudService) {}
  ngOnInit(): void {}

  openSearchDialog(): void {
    if (!this.dialogAbierto) {
      this.dialogAbierto = true;
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '600px',
        data: { registros: this.registros },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result && result.length > 0) {
          this.elementosSeleccionados = result;
        }

        console.log('Diálogo cerrado');
        this.dialogAbierto = false;
      });
    }
  }

  openSearchDialogGastos(): void {
    if (!this.dialogAbierto2) {
      this.dialogAbierto2 = true;
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '600px',
        data: { registros: this.gastos },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result && result.length > 0) {
          this.elementosSeleccionados2 = result;
        }

        console.log('Diálogo cerrado');
        this.dialogAbierto2 = false;
      });
    }
  }

  toggleForm(formType: string) {
    this.solicitudCdp = formType === 'cdp';
    this.solicitudReintegro = formType === 'reintegro';
  }

  limpiar(): void {
    this.elementosSeleccionados = [];
    this.elementosSeleccionados2 = [];
    this.fechaSeleccionada = null;
  }

  crear(): void {
    const fechaRegistro = this.fechaSeleccionada;

    // Guardar los valores de los elementos seleccionados y la fecha actual para la primera lista
    const valoresSeleccionados = this.elementosSeleccionados.map(
      (elemento: any) => {
        return {
          identificacion: elemento.identificacion,
          nombre: elemento.nombre,
          valor: elemento.valor,
          fecha: fechaRegistro,
        };
      }
    );

    // Realizar las acciones necesarias con los valores seleccionados de la primera lista
    // ...

    // Guardar los valores de los elementos seleccionados y la fecha actual para la segunda lista
    const valoresSeleccionados2 = this.elementosSeleccionados2.map(
      (elemento: any) => {
        return {
          identificacion: elemento.identificacion,
          nombre: elemento.nombre,
          valor: elemento.valor,
          fecha: fechaRegistro,
        };
      }
    );

    this.consecutivo = Math.floor(Math.random() * 1000000000);

    console.log('uno', JSON.stringify(valoresSeleccionados));
    console.log('dos', JSON.stringify(valoresSeleccionados2));
    console.log('tres ' + fechaRegistro);

    // Realizar las acciones necesarias con los valores seleccionados
    // ...

    let info = {
      fecha: fechaRegistro,
      dependencia: valoresSeleccionados,
      gastos: valoresSeleccionados2,
      consecutivo: '2023-SCDP-' + this.consecutivo,
    };

    this.crud.create('addsoli', info).subscribe((res: any) => {
      console.log(res);
    });

    alert(
      'Solicitud CDP creada con éxito, su consecutivo es: 2023-SCDP-' +
        this.consecutivo
    );

    // Limpiar las listas y reiniciar los inputs
    this.elementosSeleccionados = [];
    this.elementosSeleccionados2 = [];
    this.consecutivo = null;
    this.fechaSeleccionada = null;
  }

  crearR(): void {
    const fechaRegistro = this.fechaSeleccionada;

    this.consecutivo = Math.floor(Math.random() * 1000000000);

    // Realizar las acciones necesarias con los valores seleccionados
    // ...
    const reintegro = this.reintegro.map(
      (elemento: any) => {
        return {
          dependencia: elemento.dependencia,
          gastos: elemento.gastos,
          valor: elemento.valor,
          valorR: elemento.valorR,
        };
      }
    );

    let info = {
      fecha: fechaRegistro,
      reintegros: reintegro,
      consecutivo: '2023-SR-' + this.consecutivo,
    };

    this.crud.create('addsoliR', info).subscribe((res: any) => {
      console.log(res);
    });

    alert(
      'Solicitud de Reintegro creada con éxito, su consecutivo es: 2023-SR-' +
        this.consecutivo
    );

    // Limpiar las listas y reiniciar los inputs
    this.elementosSeleccionados = [];
    this.elementosSeleccionados2 = [];
    this.consecutivo = null;
    this.fechaSeleccionada = null;
  }
}
