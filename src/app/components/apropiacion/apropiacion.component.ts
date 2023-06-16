import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/backend/cruds/crud.service';
interface UploadedFile {
  name: string;
  size: number;
  type: string;
}

@Component({
  selector: 'app-apropiacion',
  templateUrl: './apropiacion.component.html',
  styleUrls: ['./apropiacion.component.css']
})
export class ApropiacionComponent implements OnInit {
  constructor(private crud:CrudService) { }
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
