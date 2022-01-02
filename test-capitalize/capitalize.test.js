import { strict as assert } from 'assert';
import { capitalize } from './capitalize.js';

assert.equal(capitalize('hello'), 'jello');//более короткий и информативный вариант теста
// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }

assert.equal(capitalize(''), '');//более короткий и информативный вариант теста
// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }

console.log('Все тесты пройдены!');// boom

