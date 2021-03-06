import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from "./add-component/add-component.component";
import { UpdateComponent } from "./update-component/update-component.component";
import { ListadoComponent } from "./listado/listado.component";

const routes: Routes = [

  {
    path:"personas-add/:id",
    component: AddComponent
  },
  {
    path:"personas-update/:id",
    component: UpdateComponent
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
