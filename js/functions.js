const isShorterThan = (string, length) => string.length <= length;

const isPalindrome = function(string) {
  const palindrome = string.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i < Math.floor(palindrome.length / 2); i++) {
    if (palindrome.at(i) !== palindrome.at((palindrome.length - 1) - i)) {
      return false;
    }
  }
  return true;
};

function getNumberFrom(value) {
  if (typeof value === 'number') {
    return parseInt(Math.abs(value).toString().replace('.',''),10);
  }
  const pattern = new RegExp('[0-9]','g');

  const res = value.match(pattern);
  return (res === null) ? NaN : parseInt(res.join(''),10);
}
export {isShorterThan, getNumberFrom, isPalindrome};
