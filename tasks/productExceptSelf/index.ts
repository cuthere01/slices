// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

export function productExceptSelf(nums: number[]): number[] {
    const left: number[] = [];
    const right: number[] = Array(nums.length).fill(1);
    let mult = 1;

    left[0] = mult;

    for (let i = 1; i < nums.length; i++) {
		mult *= nums[i - 1]
        left.push(mult);
    }

	mult = 1;

	for (let i = nums.length - 2; i >= 0; i--) {
        mult *= nums[i + 1];
		console.log(mult)
        right[i] = mult;
    }

    return left.map((l, i) => l * right[i]);
}

const nums = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(nums));
