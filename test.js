let result = "\n\nThe closest star to Earth is the Sun.";

// remove extra spaces and new lines
result = result.replace(/\n/g, '');
// result = result.replace(/(\r\n|\n|\r)/gm, " ");
console.log(result);