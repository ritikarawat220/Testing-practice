const reverseString = require('./task2.js');

describe('task 2', () => {
    it('should return reversed string', () => {
        const str = 'ritika';
        const strReverse = 'akitir';
        const result = reverseString(str);

        expect(result).toBe(strReverse);
    })
})