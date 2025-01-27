import { Calculator } from './index';

describe("Calculator", () => {
    describe("add", () => {
		test("Должен вернуть сумму двух элементов", () => {
			expect(new Calculator(10).add(5).getResult()).toBe(15)
		});
	});

    describe("substract", () => {
		test("Должен вернуть разность двух элементов", () => {
            expect(new Calculator(10).subtract(5).getResult()).toBe(5);
        });
	});

    describe("multiply", () => {
		test("Должен вернуть произведение двух элементов", () => {
            expect(new Calculator(10).multiply(5).getResult()).toBe(50);
        });
	});

    describe("divide", () => {
		test("Должен вернуть частное двух элементов", () => {
            expect(new Calculator(10).divide(5).getResult()).toBe(2);
        });

		test("Должен выбрасывать ошибку при делении на 0", () => {
            expect(() => new Calculator(10).divide(0)).toThrow(Error);
        });

		test("Должен вернуть ошибку, если второй аргумент 0", () => {
            expect(() => new Calculator(10).divide(0)).toThrow(
                "Division by zero is not allowed"
            );
        });
	});

    describe("power", () => {
		test("Должен вернуть возведение в степень от двух элементов", () => {
            expect(new Calculator(10).power(5).getResult()).toBe(100000);
        });

		test("Должен возвращать 1 при возведении в степень 0", () => {
            expect(new Calculator(10).power(0).getResult()).toBe(1);
        });

        test("Должен возвращать то же число при возведении в степень 1", () => {
            expect(new Calculator(10).power(1).getResult()).toBe(10);
        });
	});

	describe("getResult", () => {
		test("Должен вернуть число типа number", () => {
            expect(typeof new Calculator(10).getResult()).toBe("number");
        });

		test("Должен вернуть актуальное число", () => {
            expect(new Calculator(10).getResult()).toBe(10);
        });
	});

	test("Должен поддерживать цепочку вызовов", () => {
        expect(new Calculator(10).add(5).subtract(7).multiply(2).divide(4).power(3).getResult()).toBe(64);
    });
});