import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
// import { ReviewComponent } from './review/review.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo:'/products', pathMatch: 'full'},
  { path: 'products', component: ListComponent},
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'products/:id', component: ShowComponent},
  // { path: 'restaurants/:id/review', component: ReviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
