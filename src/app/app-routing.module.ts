
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoryEditionComponent } from './memory-edition/memory-edition.component';
import { MemoryComponent } from './memory/memory.component';
import { ResultsComponent } from './results/results.component';
import { MemoryCreateComponent } from './memory-create/memory-create.component';


const routes: Routes = [
  { path: '', component: ResultsComponent },
  { path: 'memory/view/:id', component: MemoryComponent },
  { path: 'memory/edit/:id', component: MemoryEditionComponent },
  { path: 'memory/add', component: MemoryCreateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
