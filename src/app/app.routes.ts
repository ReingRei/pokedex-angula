import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pokedex',
        loadChildren: () => import('./pokedex/pokedex.module').then((m: any) => m.PokedexModule)
    }
];
