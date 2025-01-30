// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

export function maxAreaBruteforce(height: number[]): number {
    let maxArea = 0;

    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const area = Math.min(height[i], height[j]) * (j - i);

            if (area > maxArea) {
                maxArea = area;
            }
        }
    }

    return maxArea;
}

export function maxAreaTwoPointers(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);

        if (area > maxArea) {
            maxArea = area;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxAreaBruteforce(height), maxAreaTwoPointers(height));
