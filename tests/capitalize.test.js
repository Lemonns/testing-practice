const capitalize = require('../src/capitalize')

test("returns capitalized string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("Mountain")).toBe("Mountain");
    expect(capitalize("lIoN")).toBe("LIoN");
})
