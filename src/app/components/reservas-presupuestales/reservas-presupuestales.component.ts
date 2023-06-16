import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/backend/cruds/crud.service';
import { HttpClient } from '@angular/common/http';
interface UploadedFile {
  name: string;
  size: number;
  type: string;
}

@Component({
  selector: 'app-reservas-presupuestales',
  templateUrl: './reservas-presupuestales.component.html',
  styleUrls: ['./reservas-presupuestales.component.css']
})
export class ReservasPresupuestalesComponent  implements OnInit{
  datos:any[];
  constructor(private crud:CrudService, private http:HttpClient) {
    this.datos=[];
    this.obtenerDatos();


   }
  obtenerDatos(){
    this.http.get<any[]>('assets/dataReserva.json').subscribe(data=>{
      this.datos=data;
    })

  }
  ngOnInit(): void {
  }
  public selectedFile: File | null = null;
  public fileList: UploadedFile[] = [];
  public files: File[] = [];

  public onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  public uploadFile(event: Event): void {
    event.preventDefault();

    if (this.selectedFile) {
      const file: UploadedFile = {
        name: this.selectedFile.name,
        size: this.selectedFile.size,
        type: this.selectedFile.type
      };
      this.fileList.push(file);
      this.files.push(this.selectedFile);
      this.selectedFile = null;
    }
  }

  public removeFile(index: number): void {
    this.fileList.splice(index, 1);
  }
 
  uploadAll(){
    this.files.forEach((file)=>{
    const formData = new FormData();
    formData.append('file', file);
    formData.append('ruta', "/compromiso/");
    this.crud.create("upload",formData).subscribe((res:any)=>{
      console.log(res);
    })});
   
  }
}
