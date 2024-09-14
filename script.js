function firstWord(str) {
    // Find the index of the first space
    let spaceIndex = str.indexOf(' ');
    
    // If no space is found, return the entire string
    if (spaceIndex === -1) {
        return str;
    }
    
    // Otherwise, return the substring up to the first space
    return str.substring(0, spaceIndex);
}




const s = prompt("Enter String:");
alert(firstWord(str));
