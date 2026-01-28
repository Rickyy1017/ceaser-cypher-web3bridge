function encrypt(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = char.toLowerCase() === char ? 97 : 65;
            return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
        }
        return char;
    }).join('');
}

function decrypt(text, shift) {
    return encrypt(text, -shift);
}

console.log(encrypt("eric", 3));
console.log(decrypt(encrypt("eric", 3), 3));
