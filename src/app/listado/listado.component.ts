import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit{

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  data: any;
  checkoutForm;
  items: any;

  public form: FormGroup | undefined;

  constructor (
    private http: HttpClient,
    private formBuilder: FormBuilder,
    ){
      this.checkoutForm = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        email: ['', [Validators.required]],
        prioridad: ['', [Validators.required]],
        salario:['', [Validators.required]],
      });
    }
  ngOnInit(): void{
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/pug-ins/1.10.21/i18n/Spanish.json' // CDN DE DATATABLE LENGUAJE
      }
    };
    this.http.get('http://localhost:8080/usuario')
      .subscribe((res: any) => {
        this.data = res;
        console.log(this.data)
        this.dtTrigger.next
      });
    
   
  }
  onSubmit(data: {nombre: string, email: string, prioridad: string, salario: string}) {
    if(data!)
    {
      console.log("sin datos")
    }
    else{
    this.http.post('http://localhost:8080/usuario',data).subscribe((res) => {
      console.log(res);
    });
    }
  }
  
}
