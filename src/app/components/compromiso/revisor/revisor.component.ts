import { Component } from '@angular/core';
import { CrudService } from 'src/app/backend/cruds/crud.service';
@Component({
  selector: 'app-revisor',
  templateUrl: './revisor.component.html',
  styleUrls: ['./revisor.component.css']
})
export class RevisorComponent {
  constructor(private crud:CrudService) { }
  isCorrOpen = false;
  isOpen = false;
  isCoOpen = false;
  ngOnInit(): void {
    this.list();
    
  }
  public files=[];

  public list(){
    this.crud.getAll("list").subscribe((res:any)=>{
      this.files=res;
      console.log(this.files);
    })
  }
  find(file:any){
    const url = file['url'];
    window.open(url, '_blank');
  }
  openModal(): void {
    this.isCorrOpen = true;
    this.isOpen = true;
    document.body.classList.add('modal-open');
  }

  closeModal(): void {
    this.isCorrOpen = false;
    this.isOpen = false;
    document.body.classList.remove('modal-open');
  }
  openModal2(): void {
    this.isCoOpen = true;
    this.isOpen = true;
    document.body.classList.add('modal-open');
  }

  closeModal2(): void {
    this.isCoOpen = false;
    this.isOpen = false;
    document.body.classList.remove('modal-open');
  }


}
