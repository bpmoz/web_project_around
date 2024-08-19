export default class UserInfo {
  constructor({ nameSelector, roleSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._role = document.querySelector(roleSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      userName: this._name.textContent,
      userRole: this._role.textContent,
      userAvatar: this._avatar.src,
    };
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._role.textContent = data.about;
    if (data.avatar) {
      this._avatar.src = data.avatar;
    }
    if (data._id) {
      this._userId = data._id;
    }
  }
}
