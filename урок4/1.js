'use strict';
/**
 * Функция разбивает число по разрядам и возвращает объект с записанными разрядами.
 * @param {int} num Число от 0 до 999.
 * @returns {object} Объект с разрядами числа, или пустой объект в случае ошибки. 
 */
function getDigitsOfNumber (num){
    if (!Number.isInteger(num) || num < 0 || num > 999){
        console.log('Вводимое число должно быть целым в диапазоне от 0 до 999');
        return {};
    }
    return {
        units: num % 10,
        hundreds: Math.floor(num / 100),
        tens: Math.floor(num / 10) % 10
    }
}
console.log(getDigitsOfNumber(345));