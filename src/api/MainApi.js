class MainApi {
  constructor() {
    this._baseUrl = 'https://api.bestfilm.maksimar.nomoredomains.club';
    this._headers = {
      'Content-Type': 'application/json',
    };
  }

  _responseHandler(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  async register({ email, name, password }) {
    const res = await fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    return this._responseHandler(res);
  }

  async login({ email, password }) {
    const res = await fetch(`${this._baseUrl}/signin`, {
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

  async logout() {
    const res = await fetch(`${this._baseUrl}/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
    });
    return this._responseHandler(res);
  }

  async getMe() {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    });
    return this._responseHandler(res);
  }

  async updateUserInfo({ name, email }) {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    });
    return this._responseHandler(res);
  }

  async getMyMovies() {
    const res = await fetch(`${this._baseUrl}/movie`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    });
    return this._responseHandler(res);
  }
  async saveMyMovie(movie) {
    const res = await fetch(`${this._baseUrl}/movie`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        ...movie,
      }),
    });
    return this._responseHandler(res);
  }
  async deleteMyMovie(movieId) {
    const res = await fetch(`${this._baseUrl}/movie${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    });
    return this._responseHandler(res);
  }
}

export default new MainApi();
