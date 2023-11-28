import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { RouterModule } from '@angular/router';
import { routes } from './pokedex.routes';



@NgModule({
  declarations: [PokedexComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class PokedexModule { }
