import { ArrayWrapper } from "./index";

describe("ArrayWrapper", () => {
    describe("valueOf", () => {
        test("является методом класса ArrayWrapper", () => {
            const obj = new ArrayWrapper([1, 2]);
            const prototype = Object.getPrototypeOf(obj);

            expect(prototype.hasOwnProperty("valueOf")).toBe(true);
        });

		test("возвращает число", () => {
            const obj = new ArrayWrapper([1, 2]);

            expect(typeof obj.valueOf()).toBe('number');
        });

        test("возвращает сумму элементов массива", () => {
            const obj = new ArrayWrapper([1, 2]);

            expect(obj.valueOf()).toBe(3);
        });

		test("возвращает результат, к которому применимы арифметические операции", () => {
            const obj1 = new ArrayWrapper([1, 2]);
            const obj2 = new ArrayWrapper([3, 4]);

            expect(obj1.valueOf() + obj2.valueOf()).toBe(10);
        });

        test("возвращает 0 пустом массиве", () => {
            const obj = new ArrayWrapper([]);

            expect(obj.valueOf()).toBe(0);
        });
    });

    describe("toString", () => {
        test("является методом класса ArrayWrapper", () => {
            const obj = new ArrayWrapper([1, 2]);
            const prototype = Object.getPrototypeOf(obj);

            expect(prototype.hasOwnProperty("toString")).toBe(true);
        });

        test("возвращает строку", () => {
            const obj = new ArrayWrapper([1, 2]);

            expect(typeof obj.toString()).toBe('string');
        });

		test("возвращает строку типа [x, y, ...rest]", () => {
            const obj = new ArrayWrapper([1, 2, 3, 4, 5]);

            expect(obj.toString()).toBe("[1, 2, 3, 4, 5]");
        });

		test("возвращает [] для пустого массива", () => {
            const obj = new ArrayWrapper([]);

            expect(obj.toString()).toBe('[]');
        });
    });
});
