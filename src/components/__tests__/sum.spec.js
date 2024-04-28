const { default: sum } = require("../sum");

test("test 2 values", () => {
    const result = sum(1, 3);

    expect(result).toBe(4);
});
