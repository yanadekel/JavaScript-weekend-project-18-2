// Ex5.8 - shortest words version 2
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

let longest = (str) => {
  let x = str.split(' ').sort((a, b) => b.length - a.length);
  return x.filter((word) => {
    if (word.length === x[0].length) {
      return word;
    }
  }
  )
}





console.log(longest('ya yabadoo shooooo hjkl'));
