class MoviesApi {
  constructor() {
    this._baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';
  }

  _responseHandler(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }
  async getMovies() {
    const res = await fetch(this._baseUrl);
    return this._responseHandler(res);
  }
}

export default new MoviesApi();
