//returns array
//match(regexp)

const paragraph = 'The quick brown fox Jumps over the Lazy Dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);
