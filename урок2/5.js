'use strict';
/**
 * функция сложения
 * @param   {number} a первое число
 * @param   {number} b второе число
 * @returns {number} результат суммы чисел
 */
function addition(a, b) {
    return a + b;
}

/**
 * функция вычитания
 * @param   {number} a первое число
 * @param   {number} b второе число
 * @returns {number}  результат разницы чисел
 */
function subtraction(a, b) {
    return a - b
}

/**
 * функция умножения
 * @param   {number} a первое число
 * @param   {number} b второе число
 * @returns {number} результат умножения чисел
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * функция деления
 * @param   {number} a первое число
 * @param   {number} b второе число
 * @returns {number} результат деления чисел
 */
function division(a, b) {
    return a / b;
}

/**
 * функция получает 2 числа и осуществляет над ними математическую операцию
 * @param   {number} arg1      
 * @param   {number} arg2      
 * @param   {string} operation может быть "+" "-" "*" "/"
 * @returns {number} 
 * @throws {Error} если передана не предусмотренна операция, то будет выброшена ошибка
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        default:
            throw new Error("Операция " + operation + " не предусмотрена")
    }
}
console.log(mathOperation(3, 5, "+"));
console.log(mathOperation(3, 5, "-"));
console.log(mathOperation(3, 5, "*"));
console.log(mathOperation(3, 5, "/"));
console.log(mathOperation(3, 5, "lorem"));