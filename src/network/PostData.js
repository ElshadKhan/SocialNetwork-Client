import {makeAutoObservable}from "mobx"
export default class PostData {
    constructor() {
        this._users = []
        this._post = []        
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
      return this._users
    }
    
}