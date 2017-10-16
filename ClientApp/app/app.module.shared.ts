import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { MatchComponent } from './components/match/match.component';
import { ScoresComponent } from './components/scores/scores.component';

import { Match } from './models/base';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        MatchComponent,
        ScoresComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'match', component: MatchComponent },
            { path: 'scores', component: ScoresComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [Match] 
})
export class AppModuleShared {

}
