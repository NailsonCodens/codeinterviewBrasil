  static disemvowel(str: string): string {
    let newStr = (str.replace(/A|E|I|O|U|a|e|i|o|u/g, ''))
    return newStr;
  }


  