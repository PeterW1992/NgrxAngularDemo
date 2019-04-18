import { NgModule } from '@angular/core';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'my-counter', component: MyCounterComponent },
  { path: '', pathMatch: 'full', redirectTo: '/my-counter' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
