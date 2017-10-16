
import { Component, Inject } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Router } from "@angular/router";
import { Http } from '@angular/http';

import { Match, Round, User } from '../../models/base';

@Component({
    selector: 'match',
    templateUrl: './match.component.html',
    styleUrls: ['./match.component.css']
})

export class MatchComponent {

    player1Status:boolean =  false;
    player2Status:boolean = false;
    player1Option:number;
    player2Option:number;
    resultMessage:string = "";
    forecasts: WeatherForecast[];
    baseUrl:string;
    winner:User = new User();

    constructor(public match: Match, private router: Router, private http: Http, @Inject('BASE_URL') _baseUrl: string) {
        this.baseUrl = _baseUrl;
       if( match.status == false ){
        this.router.navigate(['/home']);
        match.status = true;
       } 
    } 

    // Recieves each User Option
    sendResult(player:number, option:number){

        var message = "";
        
        // Load data and Disable Player move Round
        switch(player){
            case 1:
                this.player1Status = true;
                this.player1Option = option;
                break;
            case 2:
                this.player2Status = true;
                this.player2Option = option;
                break;
        }

        // Both users with option Selected
        if( this.player1Status != false && this.player2Status != false ){

            var winner = this.roundWinner(this.player1Option, this.player2Option);
            var winnerUser;

            if( winner == 0 ){
                message = `We got a Tie in round ${this.match.round}!`;
            }
            else {
                if( winner == 1 ){
                    winnerUser = this.match.player1;
                    this.match.player1Rounds++;
                    message = `${this.match.player1.Name} win round ${this.match.round}`;
                }
                else {
                    winnerUser = this.match.player2;
                    this.match.player2Rounds++;
                    message = `${this.match.player2.Name} win round ${this.match.round}`;
                }
                
                this.match.rounds.push(
                    new Round(this.player1Option,this.player2Option, winnerUser)
                )

                // Next Round
                this.match.round++;

            }
            // Reset Status, Option doesn't matter it will be override
            this.player1Status = false;
            this.player2Status = false;
        }

        // Finish the Last round
        if( this.match.roundMax < this.match.round ){
            // Todo: implement Add more rounds

            // Set the winner, check by player round count
            if( this.match.player1Rounds > this.match.player2Rounds ){
                this.winner = this.match.player1;
            }
            else {
                this.winner = this.match.player2;
            }

        } else {
            this.resultMessage = message;
        }

    }

    // To fill the Stars.... wtf angular...
    createRange(num:number){
        var items: number[] = [];
        for(var i = 1; i <= num; i++){
           items.push(i);
        }
        return items;
    }

    // Add more Rounds after finished
    addRounds(){
        this.match.roundMax += 2;
    }

    // Continue the Game with new Rounds Added
    continueGame(){
        if( this.match.round != this.match.roundMax + 1 ){
            this.winner = new User();
        }
    }

    // Continue Round
    continueRound(){
        this.resultMessage = "";
    }

    // Finish da Game!
    endGame(){
        this.match.winner = this.winner;

        // TODO pull to server
        this.http.put(this.baseUrl + 'api/Game/SaveMatch', this.match).subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];
            console.log(this.forecasts);
        }, error => console.error(error));

        // Reset da info
        this.match.status = false;
        this.match.player1Rounds = 0;
        this.match.player2Rounds = 0;
        this.match.roundMax = 3;
        this.match.round = 1;
        this.match.rounds = new Array<Round>();
        this.match.winner = new User();
     
        // Redirect
        this.router.navigate(['/home']);
    }

    // @params option1: number, option2:number
    // @return winner : 0 is a tie, 1 player 1 win, 2 player 2 win
    private roundWinner( option1:number, option2:number ){

        // We got a Tie
        if( option1 == option2 ){
            return 0;
        }
        // Rock wins Scissors
        if( option1 == 1 && option2 == 3 ){
            return 1;
        }
        // Paper wins Rock
        if( option1 == 2 && option2 == 1 ){
            return 1;
        }
        // Scissors wins Paper
        if( option1 == 3 && option2 == 2 ){
            return 1;
        }
        // No match on wins, so Player2 Wins
        return 2;

    }

}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
