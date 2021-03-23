export const lengthOfLongestSubstring = (s: string): number => {
  const map = new Map<string, number>();
  let longest = 0;
  let L = 0;
  for (let R = 0; R < s.length; R++) {
    const charR = s[R];

    if (map.has(charR) && map.get(charR) >= L) {
      // you don't care the char's index less than the current L
      L = map.get(charR) + 1;
      //move Left Pointer to the duplicate char's last index + 1
    }
    map.set(charR, R); // update Right pointer's index!
    longest = Math.max(longest, R - L + 1);
  }

  return longest;
};
