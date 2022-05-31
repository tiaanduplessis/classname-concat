import cc from "..";
import { test, expect, describe } from "vitest";

describe("cc", () => {
  test("should be defined", () => {
    expect(cc).toBeDefined();
  });

  test("should concat strings", () => {
    expect(cc("foo", "bar")).toBe("foo bar");
    expect(cc("foo", "bar", undefined, "baz")).toBe("foo bar baz");
  });

  test("should concat objects", () => {
    expect(cc({ bar: true }, { baz: true })).toBe("bar baz");
    expect(cc({ bar: false, nested: { ping: true } })).toBe("ping");
    expect(cc({ bar: false, nested: { ping: true } })).toBe("ping");
  });

  test("should concat tuples", () => {
    expect(cc([true, "hello"])).toBe("hello");
  });

  test("should concat functions", () => {
    expect(cc(["foo", () => "hello"])).toBe("foo hello");
    expect(cc("foo", { bar: () => true, baz: { ping: true } })).toBe(
      "foo bar ping"
    );
  });

  test("should concat nested arrays", () => {
    expect(cc(["hello"], ["foo", "bar"])).toBe("hello foo bar");
  });

  test("should ignore falsy", () => {
    expect(cc(null, "hello", undefined, "friend")).toBe("hello friend");
    expect(cc(false, false, "friend")).toBe("friend");
  });

  test("should concat mixed types", () => {
    expect(
      cc(
        "foo",
        undefined,
        () => "bar",
        { baz: true },
        { notBaz: false },
        ["notping", false],
        ["ping", true]
      )
    ).toBe("foo bar baz ping");
  });
});
