class GamesCtrl {
    constructor() {
        this.games = [
            {
                id: 9,
                player_1: 8,
                player_2: 45,
                answers_player_1: 3,
                answers_player_2: 4,
            },
            {
                id: 84,
                player_1: 64,
                player_2: 71,
                answers_player_1: 6,
                answers_player_2: 7,
            },
        ];
    }

    getAll(req, res) {
        const json = {
            response: 'Ok',
            data: this.games,
        };
        res.status(200).send(json);
    }

    get(req, res) {
        const json = {
            response: 'Ok',
            data: this.gamesQuestions.find(el => el.id === Number(req.params.gameId)),
        };
        res.status(200).send(json);
    }

    create(req, res) {
        const generatedId = 15;
        const json = {
            response: 'Created',
            data: {
                id: generatedId,
                url: `https://domain/games/${req.body.player_1}&${req.body.player_2}`,
            },
        };
        res.status(201).send(json);
    }

    update(req, res) {
        const json = {
            response: 'Ok',
            data: {
                id: req.params.gameId,
            },
        };
        res.status(200).send(json);
    }

    delete(req, res) {
        const json = {
            response: 'No content',
            data: {},
        };
        res.status(204).send(json);
    }

    deleteAll(req, res) {
        const json = {
            response: 'No content',
            data: {},
        };
        res.status(204).send(json);
    }
}

module.exports = new GamesCtrl();
