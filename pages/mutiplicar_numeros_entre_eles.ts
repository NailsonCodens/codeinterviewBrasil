function persistence(num) {
  var simulatearray = num.toString();
  result = 1;
  if (simulatearray.length == 1) {
    result = 0;
  } else {
    simulatearray = Array.from(simulatearray, Number);

    for (var i = 0; i < simulatearray.length; i++) {
      result *= simulatearray[i];
    }
    return 1 + persistence(result);
  }

  return result;
}

//com reduce
function persistence(num) {
  const str = num.toString();
  if (str.length === 1) {
    return 0;
  }
  const nextNum = str.split("").reduce((a, b) => a * b, 1);
  return 1 + persistence(nextNum);
}

//variações

function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}

//variações

const persistence = (num) => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
    : 0;
};

function persistence(num) {
  var i = 0;
  for (i; num.toString().length > 1; i++) {
    num = num
      .toString()
      .split("")
      .reduce(function (x, y) {
        return x * y;
      });
  }
  return i;
}
