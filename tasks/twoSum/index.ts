export function twoSumBruteforce(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [nums[i], nums[j]];
            }
        }
    }
    return [];
} //O(n^2)

export function twoSumTwoPointers(nums: number[], target: number): number[] {
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
} //O(nlogn)

export function twoSumTwoPassHashMapWithObj(
    nums: number[],
    target: number
): number[] {
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

export function twoSumTwoPassHashMapWithMap(
    nums: number[],
    target: number
): number[] {
    const map: Map<number, boolean> = new Map();

    nums.forEach((num) => map.set(num, true));

    for (const num of nums) {
        if (map.has(target - num)) {
            return [target - num, num];
        }
    }
    return [];
} //O(n)

export function twoSumTwoPassHashMapWithSet(
    nums: number[],
    target: number
): number[] {
    const set: Set<number> = new Set();

    nums.forEach((num) => set.add(num));

    for (const num of nums) {
        if (set.has(target - num)) {
            return [target - num, num];
        }
    }
    return [];
} //O(n)

export function twoSumOnePassHashMapWithObj(
    nums: number[],
    target: number
): number[] {
    const obj: Record<number, boolean> = {};

    for (const num of nums) {
        if (Object.keys(obj).includes(String(target - num))) {
            return [target - num, num];
        }
        obj[num] = true;
    }
    return [];
} //O(n)

export function twoSumOnePassHashMapWithMap(
    nums: number[],
    target: number
): number[] {
    const map: Map<number, boolean> = new Map();

    for (const num of nums) {
        if (map.has(target - num)) {
            return [target - num, num];
        }
        map.set(num, true);
    }
    return [];
} //O(n)

export function twoSumOnePassHashMapWithSet(
    nums: number[],
    target: number
): number[] {
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
