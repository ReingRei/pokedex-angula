import { NgModule } from '@angular/core';

import { ExtraOptions, PreloadAllModules, RouterModule, } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { AppComponent } from './app.component';

const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
};

@NgModule({
    imports: [
        RouterModule.forRoot(routes, routerConfig),
        CommonModule,
        BrowserModule,
    ],
    exports: [],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
