import {makeAutoObservable}from "mobx"

export default class PostNetwork {
    constructor() {
        this._users = [
            {id: 1, username: 'It is me', picture: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'},
            {id: 2, username: 'dad', picture: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'},
            {id: 3, username: 'mam', picture: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'},
            {id: 4, username: 'bro', picture: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'},
            {id: 5, username: 'sis', picture: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'}
        ]
        this._posts = [
            {id: 1, content: "Hello word", createdAt: '2022-08-01 14:17', picture: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'},
            {id: 2, content: "Hello dad", createdAt: '2022-08-02 14:17', picture: 'https://s1.1zoom.ru/b4344/471/Owls_Birds_Glance_537043_2560x1440.jpg'},
            {id: 3, content: "Hello mam", createdAt: '2022-08-03 14:17', picture: 'https://img3.goodfon.ru/original/2048x1365/5/ce/ptica-polyarnaya-belaya-sova-91.jpg'},
            {id: 4, content: "Hello bro", createdAt: '2022-08-04 14:17', picture: 'https://pibig.info/uploads/posts/2021-06/1623912050_27-pibig_info-p-zimnyaya-kareliya-priroda-krasivo-foto-30.jpg'},
            {id: 5, content: "Hello sis", createdAt: '2022-08-05 14:17', picture: 'https://www.vsetravel.ru/images/gallery/1417943245_DEN6219.jpg'}
        ]
        makeAutoObservable(this)
    }

    setPosts(post) {
      this._post = post
    }

    setUsers(users) {
      this._users = users
    }

    get post() {
      return this._post
    }

    get users() {
      return this.users
    }
}