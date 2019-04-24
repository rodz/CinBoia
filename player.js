Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor() {
        this.clean();
    }
    
    clean() {
        this.name = "";
        this.idGame = "";
        this.idPlayer = "";
        this.points = 0;
        this.qtChosen = 0;
    }

    clone() {
        var player = new Player();
        player.copyFrom(this);
        return player;
    }

    copyFrom(from) {
        this.name = from.name;
        this.idGame = from.idGame;
        this.points = from.points;
        this.idPlayer = from.idPlayer;
        this.qtChosen = from.qtChosen;
    }
}
exports.Aluno = Aluno;