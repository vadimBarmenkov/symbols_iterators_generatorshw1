import {Character} from "./Character";

export class Team {
    constructor() {
        this.team = {};
        this.team.length = 0;
        this.team[Symbol.iterator] = [][Symbol.iterator];
    }

    addCharacterToTeam(character){
        this.team[this.team.length] = (character);
        this.team.length++;
    }
}
