class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(response) {
    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
    return response.json();
  }

  getDataCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editUserProfile({ userName, aboutUser }) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: `${userName}`,
        about: `${aboutUser}`,
      }),
    }).then(this._checkResponse);
  }

  addNewCard({ name, link }) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  putLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  removeLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  changeAvatar(link) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: `${link}`,
      }),
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-76",
  headers: {
    authorization: "cfd1682a-c5ee-4232-81e5-cb06cea967fd",
    "Content-Type": "application/json",
  },
});

export default api;