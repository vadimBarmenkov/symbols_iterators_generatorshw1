import {Character} from "../js/Character";
import {Team} from "../js/Team";

test('test 1', () => {
    const team = new Team();
    const testCharacters = [
        new Character('Лучник', 'Bowman', 50, 1, 50, 10),
        new Character('Мечник', 'Swordman', 100, 2, 30, 20),
        new Character('Маг', 'Magican', 50, 3, 80, 5),
        new Character('Демон', 'Deamon', 120, 4, 50, 15)
    ]

    team.addCharacterToTeam(testCharacters[0]);
    team.addCharacterToTeam(testCharacters[1]);
    team.addCharacterToTeam(testCharacters[2]);
    team.addCharacterToTeam(testCharacters[3]);

    let i = 0;
    for (let item of team.team){
        expect(item).toEqual(testCharacters[i++])
    }
})
