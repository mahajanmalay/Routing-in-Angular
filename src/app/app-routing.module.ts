import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { AboutComponent } from './about/about.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [
  {path : 'batches',component : BatchesComponent},
  {path : 'about',component : AboutComponent },
  {path : 'subject',component : SubjectsComponent},
  {path : '',component : AboutComponent },
  {path : '**',component : InvalidComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
