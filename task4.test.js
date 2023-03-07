const upperCase = require('./task4');

function isUpperCase(word) {
    return /^\p{Lu}/u.test(word);
}

it("upperCase", () => {
    expect(isUpperCase(upperCase("string"))).toBe(true)
})