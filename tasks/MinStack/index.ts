class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [];

    push(val: number): void {
        if (
            this.minStack.length === 0 ||
            val <= this.minStack[this.minStack.length - 1]
        ) this.minStack.push(val);

        this.stack.push(val);
    }

    pop(): void {
        if (
            this.stack[this.stack.length - 1] ===
            this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.pop();
        }
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getSize(): number {
        return this.stack.length;
    }

    getStack(): number[] {
        return this.stack;
    }

    getMinStack(): number[] {
        return this.minStack;
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

const minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);
//minStack.push(-20);

console.log(
    minStack.getSize(),
    minStack.getStack(),
    minStack.getMinStack(),
    minStack.top(),
    minStack.getMin(),
    "\n"
);
minStack.pop();
console.log(
    minStack.getSize(),
    minStack.getStack(),
    minStack.getMinStack(),
    minStack.top(),
    minStack.getMin()
);
