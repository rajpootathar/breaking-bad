const BASE_URL = 'https://breakingbadapi.com/api';

export default class CharactersService {
  static async find(callback) {
    let res = await fetch(BASE_URL + '/characters').then(res => res.json());
    callback?.(res);
  }
}
