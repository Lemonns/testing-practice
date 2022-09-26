//const sum = require('./sum');
//
//test('adds 1 + 2 to equal 3', () => {
//    expect(sum(1, 2)).toBe(3)
//});


const capitalize = require('../src/capitalize')

test("returns capitalized string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("Mountain")).toBe("Mountain");
    expect(capitalize("lIoN")).toBe("LIoN");
})