export function accum(s: string): string {
  var array = s.toLowerCase().split('')
  var newstring = ''

  for (var i = 0; i < array.length; i++) {
    var n = 0
    while (n - 1 < i) {
      if (n == 0) {
        newstring += '-' + array[i].toUpperCase()
      } else {
        newstring += array[i]
      }
      n++
    }
    if (i == 0) {
      newstring = newstring.replace('-', '')
    }
  }

  console.log(newstring)

  return newstring
}

///outras formas
export function accum(s: string): string {
  const result = []

  for (let index = 0; index < s.length; index++) {
    const item = new Array(index + 1).fill(s[index].toLowerCase())

    item[0] = item[0].toUpperCase()

    result.push(item.join(''))
  }

  return result.join('-')
}

//melhor forma
//
export function accum(s: string): string {
  return s
    .split('')
    .map((elem, index) => elem.toUpperCase() + elem.toLowerCase().repeat(index))
    .join('-')
}
