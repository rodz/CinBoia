Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor() {
        this.clean();
    }
    clean() {
        this.name = "";
        this.idGame = "";
        this.round = 0;
        this.gameState = "START";
        this.players = [];
    }

    clone() {
        var game = new Game();
        game.copyFrom(this);
        return game;
    }

    copyFrom(from) {
        this.name = from.name;
        this.idGame = from.idGame;
        this.round = from.round;
        this.gameState = from.gameState;
        this.players = from.players;
    }

    adicionarPlayer(player){
        if(!isPlayerInGame(player.idPlayer)){
            this.players.push(player)
        }
    }

    isPlayerInGame(playerID){
        var resp = false
        for(var i=0; i< this.players.length; i+=1){
            if(this.players[i].idPlayer == playerID){
                return true
            }
        }
        return resp
    }
}
exports.Game = Game;
