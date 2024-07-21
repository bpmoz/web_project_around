export default class UserInfo {
  constructor({ nameSelector, roleSelector }) {
    this._name = document.querySelector(nameSelector);
    this._role = document.querySelector(roleSelector);
  }

  getUserInfo() {
    return {
      userName: this._name.textContent,
      userRole: this._role.textContent,
    };
  }

  setUserInfo({ name, role }) {
    this._name.textContent = name;
    this._role.textContent = role;
  }
}
