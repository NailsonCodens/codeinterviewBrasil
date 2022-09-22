export function isTriangle(a: number, b: number, c: number): boolean {
  var result = false

  if (a <= 0 || b <= 0 || c <= 0) {
    result = false
  }

  if (a + b > c && b + c > a && c + a > b) {
    result = true
  } else {
    result = false
  }

  return result
}
