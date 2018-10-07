class UsersCtrl {
    constructor() {
        this.users = [
            {
                id: 1,
                nickname: 'xXPedro777Xx',
                email: 'jose@gmail.com',
                current_points: 777,
            },
            {
                id: 2,
                nickname: 'xXRuben777Xx',
                email: 'ruben@gmail.com',
                current_points: 767,
            },
        ];

        this.getAll = this.getAll.bind(this);
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.getAllQuestions = this.getAllQuestions.bind(this);
        this.getQuestion = this.getQuestion.bind(this);
        this.createdQuestion = this.createdQuestion.bind(this);
        this.createdQuestion = this.createdQuestion.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);
    }

    getAll(req, res) {
        const json = {
            response: 'Ok',
            data: this.users,
            total: 2,
        };
        res.status(200).send(json);
    }

    get(req, res) {
        const json = {
            response: 'Ok',
            data: this.users.find(el => el.nickname === req.params.nickname),
        };
        res.status(200).send(json);
    }

    create(req, res) {
        const json = {
            response: 'Ok',
            data: {
                id: 100,
                nickname: req.body.nickname,
            },
        };
        res.status(200).send(json);
    }

    update(req, res) {
        res.status(204).send('Data successfully updated');
    }

    delete(req, res) {
        const json = {
            response: 'Ok',
            id: req.params.nickname,
        };
        res.status(200).send(json);
    }

    getAllQuestions(req, res) {
        const json = {
            response: 'Ok',
            data: `All questions from ${req.params.nickname}`,
        };
        res.status(200).send(json);
    }

    getQuestion(req, res){
        const json = {
            response: 'Ok',
            data: `Questions ${req.params.questionId} from ${req.params.nickname}`,
        };
        res.status(200).send(json);
    }

    createdQuestion(req, res) {
        const json = {
            response: 'Ok',
            data: `Questions created for ${req.params.nickname}`,
        };
        res.status(200).send(json);
    }

    removeQuestion(req, res) {
        const json = {
            response: 'Ok',
            data: `Question ${req.params.questionId} deleted from ${req.params.nickname}`,
        };
        res.status(200).send(json);
    }

    updateQuestion(req, res) {
        const json = {
            response: 'Ok',
            data: `Question ${req.params.questionId} updated from ${req.params.nickname}`,
        };
        res.status(200).send(json);
    }
}

module.exports = new UsersCtrl();
