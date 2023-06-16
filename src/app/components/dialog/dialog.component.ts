import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  identificacion!: string;
  nombre!: string;
  seleccionados: any[] = [];
  registrosFiltrados: any;
  codigoFiltro: string = '';
  nombreFiltro: string = '';
  

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.registrosFiltrados = [...this.data.registros];
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  seleccionar(registro: any): void {
    if (this.seleccionados.includes(registro)) {
      this.seleccionados = this.seleccionados.filter(
        (item) => item !== registro
      );
    } else {
      this.seleccionados.push(registro);
    }
  }

  filtrarRegistros(): void {
    
    const registrosFiltrados = this.data.registros.filter((registro: any) => {
      const cumpleCodigo = registro.identificacion
        .toLowerCase()
        .includes(this.codigoFiltro.toLowerCase());
      const cumpleNombre = registro.nombre
        .toLowerCase()
        .includes(this.nombreFiltro.toLowerCase());
      return cumpleCodigo && cumpleNombre;
    });

    this.data.registros = registrosFiltrados;
  }

  agregar(): void {
    // Enviar los datos seleccionados al componente que lo está utilizando
    this.dialogRef.close(this.seleccionados);
  }
}
