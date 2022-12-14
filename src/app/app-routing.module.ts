import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent
  },
  {
    path: 'listado', component: ListadoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
