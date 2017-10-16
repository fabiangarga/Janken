import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Match } from '../../models/base';

@Component({
    selector: 'scores',
    templateUrl: './scores.component.html',
    styleUrls: ['./scores.component.css']
})
export class ScoresComponent {

    baseUrl:string;
    matches:Match[];

    constructor(private http: Http, @Inject('BASE_URL') _baseUrl: string) {
       this.baseUrl = _baseUrl;

        this.http.get(this.baseUrl + 'api/Game/GetAll').subscribe(result => {
            this.matches = result.json() as Match[];
        }, error => console.error(error));
    } 

   
}
