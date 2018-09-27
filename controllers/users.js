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
        this.getEmails = this.getEmails.bind(this);
        this.getFriends = this.getFriends.bind(this);
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.addEmail = this.addEmail.bind(this);
        this.addFriend = this.addFriend.bind(this);
        this.removeEmail = this.removeEmail.bind(this);
        this.removeFriend = this.removeFriend.bind(this);
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

    getEmails(req, res) {
        const json = {
            response: 'Ok',
            data: `emails of ${req.params.nickname}`,
        };
        res.status(200).send(json);
    }

    getFriends(req, res) {
        const json = {
            response: 'Ok',
            data: `friends of ${req.params.nickname}`,
            total: 1,
        };
        res.status(200).send(json);
    }

    addEmail(req, res) {
        const json = {
            response: 'Ok',
            data: `emails add to ${req.params.nickname}`,
        };
        res.status(200).send(json);
    }

    addFriend(req, res) {
        const json = {
            response: 'Ok',
            data: `friend add to ${req.params.nickname}`,
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

    updateEmail(req, res){
        res.status(204).send('Data successfully updated');
    }

    delete(req, res) {
        const json = {
            response: 'Ok',
            id: req.params.nickname,
        };
        res.status(200).send(json);
    }

    removeEmail(req, res) {
        const json = {
            response: 'Ok',
            id: req.params.nickname,
        };
        res.status(200).send(json);
    }

    removeFriend(req, res) {
        const json = {
            response: 'Ok',
            id: req.params.nickname,
        };
        res.status(200).send(json);
    }
}

module.exports = new UsersCtrl();
