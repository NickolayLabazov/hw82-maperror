export default class ErrorRepository {
  constructor() {
    this.map = new Map([
      [0, 'error_0'],
      [1, 'error_1'],
      [2, 'error_2'],
      [3, 'error_3'],
      [4, 'error_4'],
    ]);
  }

  getEerror(num) {
    if (this.map.has(num)) {
      return this.map.get(num);
    }
    throw ('Unknown error');
  }
}
