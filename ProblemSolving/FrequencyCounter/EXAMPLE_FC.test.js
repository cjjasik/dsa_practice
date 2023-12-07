const getMostCommonFirstName = require('./EXAMPLE-FC');

describe('getMostCommonFirstName', ()=>{
    test('returns the most common first name', () => {
        const names = ['John Doe', 'Jane Doe', 'John Smith', 'Jane Smith', 'John Johnson'];
        expect(getMostCommonFirstName(names)).toEqual('john');
      });

    test('return first name if all have the most frequency',()=>{
        const names = ['John Doe', 'Jane Smith', 'Mary Johnson'];
        expect(getMostCommonFirstName(names)).toEqual('john');
    });

    test('ignore case sensitivity', ()=>{
        const names = ['john doe', 'Jane Doe', 'John Smith', 'Jane Smith', 'john Johnson'];
        expect(getMostCommonFirstName(names)).toEqual('john');
    });

    test('empty array returns undefined',()=>{
        const names = [];
        expect(getMostCommonFirstName(names)).toEqual(undefined);
    })

});