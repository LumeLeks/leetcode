function isPalindrome(x: number): boolean {
    const s = String(x);
    for (let i = 0; i < s.length; i++) {
        const j = s.length - (i + 1)
            if (s[i] !== s[j])
                return false;
    }
    return true;
};