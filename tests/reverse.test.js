const reverse = require('../src/reverse')

test("returns reversed string", () => {
    expect(reverse("hello")).toBe('olleh');
    expect(reverse("What's up?")).toBe("?pu s'tahW");
})