class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _checkResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject((error) =>
          console.error(`Ошибка ответа сервера ${error}`)
        );
  }

  getInfo(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  addMovie(data, token) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        nameRU: data.nameRU,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        trailer: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`,
        duration: data.duration,
        country: data.country,
        director: data.director,
        year: data.year,
        description: data.description,
        nameEN: data.nameEN,
        movieId: data.id,
      }),
    }).then(this._checkResponse);
  }

  getSavedMovies(token) {
    return fetch(`${this._url}/movies`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  setUserInfo(data, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._checkResponse);
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  // baseUrl: 'http://localhost:4000',
  baseUrl: 'https://api.domashnii-al.nomoredomainsrocks.ru',
});

export default mainApi;
