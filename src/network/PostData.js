import { makeAutoObservable } from "mobx";
export default class PostData {
  constructor() {
    this._users = [];
    this._post = [];
    this._selectedUser = {};
    makeAutoObservable(this);
  }

  setPosts(post) {
    this._post = post;
  }

  setUsers(users) {
    this._users = users;
  }

  setSelectedUser(user) {
    this._selectedUser = user;
  }

  get post() {
    return this._post;
  }

  get getUserPosts() {
    return this._post;
  }

  get selectedUser() {
    return this._selectedUser;
  }

  get users() {
    return this._users;
  }
}
