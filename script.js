function firstWord(str: string): string {
    // Check if the input string is empty
    if (str.length === 0) {
        return '';
    }

    // Find the index of the first space in the string
    const firstSpaceIndex = str.indexOf(' ');

    // If there is no space, return the entire string
    if (firstSpaceIndex === -1) {
        return str;
    }

    // Return the first word of the string up to the first space
    return str.substring(0, firstSpaceIndex);
}

// Examples
console.log(firstWord('see and stop'));    // Output: 'see'
console.log(firstWord(' Hello World!'));   // Output: 'Hello'
console.log(firstWord('12345'));            // Output: '12345'
console.log(firstWord(''));                 // Output: ''
