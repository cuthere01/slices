import {
    twoSumBruteforce,
    twoSumTwoPointers,
    twoSumTwoPassHashMapWithObj,
    twoSumTwoPassHashMapWithMap,
    twoSumTwoPassHashMapWithSet,
    twoSumOnePassHashMapWithObj,
    twoSumOnePassHashMapWithMap,
    twoSumOnePassHashMapWithSet,
    ItwoSum,
} from "./index";

const testCases = [
    {
        description:
            "должен возвращать два числа с суммой, равной целевому числу",
        nums: [2, 15, 11, 7],
        target: 22,
        expected: [7, 15],
    },
    {
        description:
            "должен возвращать пустой массив, если нет двух чисел с суммой, равной целевому числу",
        nums: [3, 2, 4],
        target: 10,
        expected: [],
    },
    {
        description:
            "должен возвращать два числа с суммой, равной целевому числу при равенстве двух чисел",
        nums: [3, 3],
        target: 6,
        expected: [3, 3],
    },
];

const functionsToTest: [string, ItwoSum][] = [
    ["twoSumBruteforce", twoSumBruteforce],
    ["twoSumTwoPointers", twoSumTwoPointers],
    ["twoSumTwoPassHashMapWithObj", twoSumTwoPassHashMapWithObj],
    ["twoSumTwoPassHashMapWithMap", twoSumTwoPassHashMapWithMap],
    ["twoSumTwoPassHashMapWithSet", twoSumTwoPassHashMapWithSet],
    ["twoSumOnePassHashMapWithObj", twoSumOnePassHashMapWithObj],
    ["twoSumOnePassHashMapWithMap", twoSumOnePassHashMapWithMap],
    ["twoSumOnePassHashMapWithSet", twoSumOnePassHashMapWithSet],
];

describe("twoSum", () => {
    functionsToTest.forEach(([name, func]) => {
        describe(name, () => {
            test.each(testCases)(
                `$description`,
                ({ nums, target, expected }) => {
                    const res = func(nums, target);
                    expect(res).toEqual(expect.arrayContaining(expected));
                }
            );
        });
    });
});
