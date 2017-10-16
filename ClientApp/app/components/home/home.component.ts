import { Component } from '@angular/core';
import {FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import { Router } from "@angular/router";

import { Match } from '../../models/base';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    player1:string;
    player2:string; 
    error:boolean = false;

    constructor(public match: Match, private router: Router) {
       this.player1 = this.match.player1.Name;
       this.player2 = this.match.player2.Name;
    } 


    startGame(){

       if(this.player1 !== undefined && this.player2 !== undefined){
           this.match.status = true;
           this.match.player1.Name = this.player1;
           this.match.player2.Name = this.player2;
           this.router.navigate(['/match']);
       } else {
           this.error = true;
       }
        
    }

    scoresGame(){
        this.router.navigate(['/scores']);
    }
}
