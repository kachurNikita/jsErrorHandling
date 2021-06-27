'use strict'
//Для рекурсивной функции возведения числа в степень pow(base, exponent) реализовать валидацию передаваемых значений и генерацию ошибок соостветствующих типов.
// Вызов функции заключить в блок try с отлавливанием исключительных ситуаций (ошибок) разных типов с оповещением пользователя о типе наступившей ошибки.

function pow(x,n) {
    if (typeof x !== 'number' && typeof n !== 'number'){
        throw new TypeError('The type of value is not a number');
    }
    if (!Number.isFinite(x) && !Number.isFinite(n)) {
        throw new RangeError('Theargument must be a finite value');
    }
    if (!Number.isInteger(x) || !Number.isInteger(n) || x < 0 || n < 0) {
        throw RangeError('The argument must be non negative integer value');
    }
    if (n === 1) {
        return x
    } else {
        return   x * pow(x,  n -1)
    }
};

try {
    pow(1, 2);

}
catch (error) {
    console.log(error)
};

