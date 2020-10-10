import { Binary } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinarySearchComponent } from './binary-search/binary-search.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: BubbleSortComponent },
  // { path: 'binary', component: BinarySearchComponent },
  // { path: 'bubble', component: BubbleSortComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
