import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';


const routes: Routes = [
  {path: '', component: ProductListComponent},
  { path: 'categories',
    loadChildren:() => import('./components/components.module').then((m)=>m.ComponentsModule),
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
