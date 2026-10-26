function isValid(s: string): boolean {
    let stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        }
        else {
            let last = stack.pop();
            if (last === undefined) {
                return false;
            }

            if (last === '(' && s[i] !== ')') {
                return false;
            }
            if (last === '[' && s[i] !== ']') {
                return false;
            }
            if (last === '{' && s[i] !== '}') {
                return false;
            }
        }
    }
    return stack.length === 0;
};