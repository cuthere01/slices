export class ArrayWrapper {
    private nums: number[];

    constructor(nums: number[]) {
        this.nums = nums;
    }

    valueOf(): number {
        return this.nums.reduce((sum, num) => sum + num, 0);
    }

    toString(): string {
        return `[${this.nums.toString()}]`;
    }
}


const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);

console.log(obj1.valueOf() + obj2.valueOf()); // 10
console.log(obj1.toString(), obj1);
console.log(obj2.toString(), obj2);
 
