
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { MemoryComponent } from './memory/memory.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [

  { path: '', component: ResultsComponent },
  { path: 'memory/:id', component: MemoryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
