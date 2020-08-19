// Write code under this line
class Storage {
  constructor(goods) {
    this.goods = goods;
  }
}
Storage.prototype.getItems = function () {
  return goods;
};
Storage.prototype.addItem = function (item) {
  return goods.push(item);
};
Storage.prototype.removeItem = function (item) {
  //  delete goods.indexOf(item);
  return goods;
};

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
