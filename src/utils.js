

/** Format integer into string with commas */
export function addCommas(num) {
  let numStr = num.toString();
  let insertIdx = numStr.length - 3;

  // insert commas from end of number to start
  while(insertIdx > 0) {
    if (numStr[insertIdx-1] !== '-') {
      numStr = numStr.slice(0, insertIdx) + ',' + numStr.slice(insertIdx);
    }

    insertIdx -= 3;
  }

  return numStr;
}