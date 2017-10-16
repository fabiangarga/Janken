import { Injectable } from '@angular/core';

@Injectable()
export class Match {

    status:boolean;
    player1:User;
    player2:User;
    player1Rounds:number;
    player2Rounds:number;
    round:number;
    roundMax:number
    rounds: Round[];
    winner:User;

    constructor(){

        this.status = false;
        this.player1 = new User();
        this.player2 = new User();
        this.player1Rounds = 0;
        this.player2Rounds = 0;
        this.round = 1;
        this.roundMax = 3;
        this.rounds = [];
    }

}


export class User {

    public Id:string;
    public Name:string;

}

export class Round {

    public player1:number;
    public player2:number;
    public winner:User;

    constructor (_player1:number, _player2:number, _winner:User){
        this.player1 = _player1;
        this.player2 = _player2;
        this.winner  = _winner;
    }
}