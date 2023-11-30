const getMostCommonFirstName = require('./frequencyCounter');

describe('Returns the most common first name from an array of full names'), () => {

    test('returns the most common first name', () => {
        const names = ['John Doe', 'Jane Doe', 'Jane Smith', 'John Smith', 'John Johnson'];
        expect(getMostCommonFirstName(names)).toEqual('John');
    });

    test('return first name if all have the most frequency', () => {
        const names = ["John Doe", "Jane Doe", "Mary Johnson"];
        expect(getMostCommonFirstName(names)).toEqual("John");
    });

    test('ignore case sensitivity', () => {
        const names = ['john Doe', 'Jane Doe', 'jane Smith', 'John Smith', 'john Johnson'];
        expect(getMostCommonFirstName(names)).toEqual('John');
    });

    test('empty array returns undefined', () => {
        const names = ['john Doe', 'Jane Doe', 'jane Smith', 'John Smith', 'john Johnson'];
        expect(getMostCommonFirstName(names)).toEqual(undefined);
    });

};