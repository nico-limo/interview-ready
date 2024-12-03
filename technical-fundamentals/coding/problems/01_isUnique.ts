// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
  const set: Set<string> = new Set();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (set.has(char)) {
      return false;
    }
    set.add(char);
  }
  return true;

  // O n cuadrado
  //   for (let i = 0; i < str.length; i++) {
  //     for (let j = 0; j < str.length; j++) {
  //         const element = str[j];
  //         if(str[i] === str[j]){
  //             return false
  //         }
  //     }
  //   }
  //   return true
}
