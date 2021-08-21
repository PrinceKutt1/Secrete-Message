let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();//removes the last element from an array and returns that element
console.log(secretMessage.length);
secretMessage.push("to", "Program");//adds one or more elements to the end of an array and returns the new length of the array.
secretMessage[7]= "right";
secretMessage.shift();//removes the first element from an array and returns that removed element
secretMessage.unshift("Programming");//adds one or more elements to the beginning of an array and returns the new length of the array.
//console.log(secretMessage);
secretMessage.splice(5,6, "know,");//replace 5 items at index 6
//console.log(secretMessage);
let newMessage = secretMessage.length;

console.log(`Length of secrete message is: ${newMessage}  `)
console.log(secretMessage.join(' '));

