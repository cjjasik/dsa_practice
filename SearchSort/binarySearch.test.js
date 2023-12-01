const binarySearch = require("./binarySearch");

describe("binarySearch", () => {
    test("returns the correct index for an even-length array", () =>{
        const array = [2, 3, 4, 10, 40, 45];
        expect(binarySearch(array, 10)).toBe(3)
    });

    test("returns the correct index for an odd-length array", () =>{
        const array = [2, 3, 4, 10, 13, 40, 60];
        expect(binarySearch(array, 13)).toBe(4)
    });

    test("returns -1 when element is not found in even-length array", () =>{
        const array = [2, 3, 4, 10, 40, 45];
        expect(binarySearch(array, 13)).toBe(4)
    });

    test("returns -1 when element is not found in odd-length array", () =>{
        const array = [2, 3, 5, 10, 13, 40, 60];
        expect(binarySearch(array, 50)).toBe(4)
    });
})