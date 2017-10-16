import { Component } from '@angular/core';

import { Match } from '../../models/base';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})

export class NavMenuComponent {

    constructor(public match: Match) {

    } 

}
