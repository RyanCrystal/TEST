git
test.sort((a, b) => {
  if (a.weight > b.weight) {
    return -1;
  }
  if (b.weight > a.weight) {
    return 1;
  }
  return 0;
});

function calc(arr, i) {
  let ret = 0;
  for (let j = arr.length - 1; j >= 0; j--) {
    if (i[j] >= 0) {
      ret += arr[j].weight;
    }
  }
  return ret;
}

function check(arr, i) {
  let ret = 0;
  let have = [];
  for (let j = arr.length - 1; j >= 0; j--) {
    if (i[j] >= 0) {
      if (have.indexOf(arr[j].b[i[j]]) >= 0) {
        return false;
      }
      have.push(arr[j].b[i[j]]);
      ret += arr[j].weight;
    }
  }
  return ret;
}

function setI(arr, _i) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i].i = _i[i];
  }
}

let best = { i: new Array(test.length), weight: -1 };
best.i.fill(-1);
let k = 0;
let i = new Array(test.length);
i.fill(-1);
do {
  let temp = check(test, i);
  if (temp !== false) {
    if (temp > best.weight) {
      console.log(k, temp, i);
      best.i = i.slice();
      best.weight = temp;
    }
  }
  for (let j = test.length - 1; j >= 0; j--) {
    if (++i[j] >= test[j].b.length) {
      if (j === 0) {
        i = false;
        break;
      }
      i[j] = -1;
    } else {
      break;
    }
  }
  k++;
} while (i !== false);

setI(test, best.i);

console.clear();
for (let i = 0; i < test.length; i++) {
  console.log(test[i]);
}
console.log("=======================================");
console.log(
  best.weight,
  check(test, best.i),
  calc(test, best.i),
  best.i.join(",")
);
