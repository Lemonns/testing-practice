const analyze = require("../src/analyze.js");

test("Analyzes array", () => {
    const data = analyze([1,8,3,4,2,6]);
    expect(data['average']).toBe(4);
    expect(data['min']).toBe(1);
    expect(data['max']).toBe(8);
    expect(data['length']).toBe(6);
})