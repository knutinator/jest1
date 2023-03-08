/**
 * @jest-environment jsdom
 */
const { game, newGame, showScore } = require("../game");

beforeAll(() => {
let fs = require("fs");
let fileContents = fs.readFileSync("index.html", "utf-8");
document.open();
document.write(fileContents);
document.close();
});

describe("game object contains corrects keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains corrects ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        /* add data for the tests to work with */
        game.score = 42; 
        game.playerMoves = ["button2", "button2"];
        game.currentGame = ["button2", "button2"];    
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear the playerMoves array", () => {
        expect(game.playerMoves.length).toEqual(0);
    });
    test("should clear the currentGame array", () => {
        expect(game.currentGame.length).toEqual(0);
    });
    test("should display 0 for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});