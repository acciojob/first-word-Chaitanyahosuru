function firstWord(str) {
    // Find the index of the first space
   s = s.trim();
 // Find the index of the first space
 const spaceIndex = s.indexOf(' ');
 // If no space is found, return the entire string
 if (spaceIndex === -1) {
 return s;
 }
 // Return the substring from the start of the string to the first space
 return s.substring(0, spaceIndex);

}




const s = prompt("Enter String:");
alert(firstWord(str));
