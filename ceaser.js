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
git 
function decrypt(text, shift) {
    return encrypt(text, -shift);
}

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log('Usage: node ceaser.js <encrypt|decrypt> "<text>" <shift>');
    process.exit(1);
}

const [command, text, shiftStr] = args;
const shift = parseInt(shiftStr, 10);

if (isNaN(shift)) {
    console.log('Error: Shift must be a number');
    process.exit(1);
}

if (command === 'encrypt') {
    console.log(encrypt(text, shift));
} else if (command === 'decrypt') {
    console.log(decrypt(text, shift));
} else {
    console.log('Error: Command must be "encrypt" or "decrypt"');
    process.exit(1);
}
