// Write code under this line
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems = function () {
    return goods;
  };
  addItem = function (items) {
    return goods.push(items);
  };
  removeItem = function (items) {
    const index = goods.indexOf(items);
    if (index > -1) {
      return goods.splice(index, 1);
    }
  };
}

console.log(typeof Storage);

// 'function'

const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */
