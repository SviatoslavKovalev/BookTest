import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

// Данный массив содержит в себе название и путь адресов до определенных частей компонентов 
const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  declarations: [SearchComponent, FavoritesComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
