export type ItwoSum = (nums: number[], target: number) => number[];

export const twoSumBruteforce: ItwoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [nums[i], nums[j]];
            }
        }
    }
    return [];
}; //O(n^2)

export const twoSumTwoPointers: ItwoSum = function (nums, target) {
    const sorted = [...nums].sort((a, b) => a - b);
    let [left, right] = [0, nums.length - 1];

    while (left < right) {
        const sum = sorted[left] + sorted[right];

        if (sum === target) {
            return [sorted[left], sorted[right]];
        } else if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        }
    }

    return [];
}; //O(nlogn)

export const twoSumTwoPassHashMapWithObj: ItwoSum = function (nums, target) {
    const obj: Record<number, boolean> = {};

    nums.forEach((num) => {
        obj[num] = true;
    });

    for (const num of nums) {
        if (Object.keys(obj).includes(String(target - num))) {
            return [target - num, num];
        }
    }
    return [];
} //O(n)

export const twoSumTwoPassHashMapWithMap: ItwoSum = function (nums, target) {
    const map: Map<number, boolean> = new Map();

    nums.forEach((num) => map.set(num, true));

    for (const num of nums) {
        if (map.has(target - num)) {
            return [target - num, num];
        }
    }
    return [];
} //O(n)

export const twoSumTwoPassHashMapWithSet: ItwoSum = function (nums, target) {
    const set: Set<number> = new Set();

    nums.forEach((num) => set.add(num));

    for (const num of nums) {
        if (set.has(target - num)) {
            return [target - num, num];
        }
    }
    return [];
} //O(n)

export const twoSumOnePassHashMapWithObj: ItwoSum = function (nums, target) {
    const obj: Record<number, boolean> = {};

    for (const num of nums) {
        if (Object.keys(obj).includes(String(target - num))) {
            return [target - num, num];
        }
        obj[num] = true;
    }
    return [];
}; //O(n)

export const twoSumOnePassHashMapWithMap: ItwoSum = function (nums, target) {
    const map: Map<number, boolean> = new Map();

    for (const num of nums) {
        if (map.has(target - num)) {
            return [target - num, num];
        }
        map.set(num, true);
    }
    return [];
} //O(n)

export const twoSumOnePassHashMapWithSet: ItwoSum = function (nums, target) {
    const set: Set<number> = new Set();

    for (const num of nums) {
        if (set.has(target - num)) {
            return [target - num, num];
        }
        set.add(num);
    }
    return [];
} //O(n)

const numbers = [1, 8, 11, 15, 7, 14, 2, 0, -6, 0, 4, 9, 13, 50];
const target = 5;

console.log(
    twoSumBruteforce(numbers, target),
    twoSumTwoPointers(numbers, target),
    twoSumTwoPassHashMapWithObj(numbers, target),
    twoSumTwoPassHashMapWithMap(numbers, target),
    twoSumTwoPassHashMapWithSet(numbers, target),
    twoSumOnePassHashMapWithObj(numbers, target),
    twoSumOnePassHashMapWithMap(numbers, target),
    twoSumOnePassHashMapWithSet(numbers, target)
);
