import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from "./personas/personas.component";
import { ListadoComponent } from "./listado/listado.component";

const routes: Routes = [

  {
    path:"personas-add/:id",
    component: PersonasComponent
  },
  {
    path:"",
    component: ListadoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
