function isValid(s: string): boolean {
    let stack: string[] = [];

    const pairs: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (const char of s) {
        if (!(char in pairs)) {
            stack.push(char)
        } else {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};