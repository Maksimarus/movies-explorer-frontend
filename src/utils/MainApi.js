class MainApi {
  constructor() {
    this._baseUrl = 'https://api.bestfilm.maksimar.nomoredomains.club/';
    this._headers = {
      'Content-Type': 'application/json',
    };
  }
  _responseHandler(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }
  async register(email, password, name) {
    const res = await fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });
    return this._responseHandler(res);
  }
  async login(email, password) {
    const res = await fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    });
    return this._responseHandler(res);
  }
  logout() {
    return this._request(`${this.baseUrl}/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
    });
  }
  getMe() {
    return this._request(`${this.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    });
  }
  updateUserInfo(name, email) {
    return this._request(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    });
  }

  getMyMovies() {
    return this._request(`${this.baseUrl}/movie`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    });
  }
  saveMyMovie(movie) {
    return this._request(`${this.baseUrl}/movie`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        ...movie,
      }),
    });
  }
  deleteMyMovie(movieId) {
    return this._request(`${this.baseUrl}/movie${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    });
  }
}

export default new MainApi();
