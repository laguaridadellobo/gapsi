import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  data: any;
  constructor (
    private http: HttpClient,
    ){
      
    }
  ngOnInit(): void{
    
    this.http.get('http://localhost:8080/usuario/1')
      .subscribe((res: any) => {
        this.data = res;
        console.log(this.data)
      });
    
   
  }
}
