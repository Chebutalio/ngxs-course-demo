import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from "./components/list-item/list-item.component";
import { ListContainerComponent } from "./components/list-container/list-container.component";

const routes: Routes = [
  { path: '', component: ListItemComponent },
  { path: 'list', component: ListContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
