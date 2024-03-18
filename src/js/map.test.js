import { ErrorRepository } from "./map.js";

test("получение текст ошибки", () => {
    const eror = new ErrorRepository();
    expect(() => eror.translate(3)).toThrow(new Error("Unknown error"));
})

test("возврашаемая значения", () => {
    const data = new ErrorRepository();
    expect(data.translate(1)).toBe("Eror text");
})


