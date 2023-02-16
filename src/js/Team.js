export class Team {
    constructor() {
        this.team = {};
        this.teamLength = 0;
        this.team[Symbol.iterator] = function (){
            let current = 0;
            let last = this.teamLength;

            return{
                next(){
                    if (current <= last) {
                        return {
                            done: false,
                            value: current++
                        };
                    } else {
                        return {
                            done: true
                        };
                    }
                }
            }
        }
    }

    addCharacterToTeam(character){
        this.team[this.teamLength] = (character);
        this.teamLength++;
    }
}
