// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

export function moveZeroes(nums: number[]): void {
    let left = 0; //следит за нулями
    let right = 1; //следит за ненулевыми числами

    while (left < nums.length - 1 && !(nums[right] === 0 && right === nums.length - 1)) {
        
        if (nums[left] === 0 && nums[right] !== 0) {
            nums[left] = nums[right];
            nums[right] = 0;
        }
		if(nums[left] !== 0) {
            left++;
        }
        if((nums[right] === 0 || nums[right - 1] !== 0) && right < nums.length - 1) {
            right++;
        }
		//console.log(nums);
    }

    console.log(nums);
}

export function moveZeroesOptimized(nums: number[]): void {
    let insertPos = 0; // Куда вставлять ненулевой элемент

    for (let scanner = 0; scanner < nums.length; scanner++) {
        if (nums[scanner] !== 0) {
            [nums[insertPos], nums[scanner]] = [nums[scanner], nums[insertPos]]; // Swap
            insertPos++; // Двигаем указатель вставки
        }
    }

    console.log(nums);
}

const nums = [1, 0, 1];
moveZeroes(nums);
moveZeroesOptimized(nums)
